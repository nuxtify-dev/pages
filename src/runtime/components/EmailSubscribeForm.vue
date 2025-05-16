<script setup lang="ts">
// Types
import type { VForm } from 'vuetify/lib/components/VForm/index.mjs'

import {
  formRules,
  getBaseUrl,
  getUtmParams,
  isExternalUrl,
  navigateTo,
  ref,
  submitFormData,
  useDisplay,
  useId,
  useNuxtifyConfig,
} from '#imports'

// Props
const props = defineProps({
  submitUrl: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: 'Subscribe',
  },
  emailPlaceholder: {
    type: String,
    default: 'Enter your best email',
  },
  marketingConsentText: {
    type: String,
    default: 'Unsubscribe any time.',
  },
  showPrivacy: {
    type: Boolean,
    default: false,
  },
  redirectUrl: {
    type: String,
    default: '',
  },
  thankYouMessage: {
    type: String,
    default: 'Thanks for signing up!',
  },
  dark: {
    type: Boolean,
    default: false,
  },
  appendButtonIcon: {
    type: String,
    default: '',
  },
  prependButtonIcon: {
    type: String,
    default: '',
  },
})

// App state
const id = useId()
const nuxtifyConfig = useNuxtifyConfig()
const { xs } = useDisplay()

// Form state
const form = ref<VForm>()
const isSubmitted = ref(false)
const isError = ref(false)
const errorMessage = ref('')
const loading = ref(false)
const formInput = ref({
  email: '',
})

// Button style
const rounded = () => {
  if (nuxtifyConfig.style?.btn?.rounded) {
    return xs.value ? 'lg' : '0 e-lg'
  }
  else {
    return 0
  }
}

async function handleSubmit() {
  loading.value = true
  const res = await form.value?.validate()
  if (res?.valid) {
    const formData = new FormData()

    // Get UTM params
    const { utmSource, utmMedium, utmCampaign, utmTerm, utmContent }
      = getUtmParams(window.location.href)

    // Set form field keys
    // Default
    let fieldPrepend = ''
    let fieldAppend = ''

    // Mailerlite
    if (props.submitUrl.includes('mailerlite')) {
      fieldPrepend = 'fields['
      fieldAppend = ']'
    }

    // Set form field values
    formData.append(
      `${fieldPrepend}email${fieldAppend}`,
      formInput.value.email,
    )
    formData.append(
      `${fieldPrepend}referrer${fieldAppend}`,
      getBaseUrl(window.location.href),
    )

    if (utmSource)
      formData.append(`${fieldPrepend}utm_source${fieldAppend}`, utmSource)
    if (utmMedium)
      formData.append(`${fieldPrepend}utm_medium${fieldAppend}`, utmMedium)
    if (utmCampaign)
      formData.append(`${fieldPrepend}utm_campaign${fieldAppend}`, utmCampaign)
    if (utmTerm)
      formData.append(`${fieldPrepend}utm_term${fieldAppend}`, utmTerm)
    if (utmContent)
      formData.append(`${fieldPrepend}utm_content${fieldAppend}`, utmContent)

    // Send to email provider
    const providerResponse = await submitFormData(props.submitUrl, formData)
    isError.value = providerResponse.isError
    errorMessage.value = providerResponse.errorMessage

    // Redirect
    if (!isError.value && props.redirectUrl) {
      await navigateTo(props.redirectUrl, {
        external: isExternalUrl(props.redirectUrl, nuxtifyConfig.brand?.domain ?? ''),
      })
    }
    else {
      isSubmitted.value = providerResponse.isSubmitted
    }
  }
  loading.value = false
}
</script>

<template>
  <!-- Form -->
  <v-form
    v-if="!isSubmitted"
    ref="form"
    validate-on="submit"
    @submit.prevent="handleSubmit"
  >
    <div class="d-sm-flex justify-center">
      <!-- Using useId prevents hydration mismatch warnings issue with Vuetify -->
      <!-- See: https://github.com/vuetifyjs/vuetify/issues/19696 -->
      <!-- Once the issue is resolved (and it's used internally in Vuetify), remove use of useId -->
      <v-text-field
        :id
        v-model="formInput.email"
        type="email"
        color="secondary"
        :placeholder="emailPlaceholder"
        :rules="[formRules.required, formRules.validEmail]"
        :rounded="xs ? 't-lg' : '0 ts-lg'"
        hide-details="auto"
        class="text-start"
      >
        <template #message="{ message }">
          <span :class="dark ? 'text-red-lighten-3' : ''">{{ message }}</span>
        </template>
      </v-text-field>
      <v-btn
        type="submit"
        variant="flat"
        color="secondary"
        size="x-large"
        class="d-flex align-center py-7 mt-2 mt-sm-0"
        :loading
        :rounded="rounded()"
        :append-icon="appendButtonIcon"
        :prepend-icon="prependButtonIcon"
        :block="xs"
      >
        {{ buttonText }}
      </v-btn>
    </div>

    <!-- Supporting Text -->
    <div
      v-if="showPrivacy || marketingConsentText"
      :class="`text-body-2  ${
        dark ? 'text-grey-lighten-2' : 'text-medium-emphasis'
      } mt-2`"
    >
      <span v-if="marketingConsentText">
        {{ marketingConsentText }}
      </span>
      <span v-if="showPrivacy">
        By signing up you agree to the
        <NuxtLink
          :to="nuxtifyConfig.policies?.privacyUrl"
          :class="`text-decoration-none ${
            dark ? 'text-grey-lighten-2' : 'text-medium-emphasis'
          }`"
        >
          Privacy Policy</NuxtLink>.
      </span>
    </div>
  </v-form>

  <!-- Thank You -->
  <div
    v-else
    class="text-body-1"
  >
    {{ thankYouMessage }}
  </div>
</template>

<style scoped>
/* Spacing for error message */
:deep(.v-input__details) {
  padding-inline: 0px;
}
:deep(.v-text-field .v-input__details) {
  padding-inline: 0px;
}

/* Hover over links */
a:hover {
  text-decoration: underline !important;
}
</style>
