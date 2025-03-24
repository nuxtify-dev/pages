// Submit form data helper function
export const submitFormData = async (submitUrl: string, formData: FormData) => {
  // Return variables
  let isSubmitted = false
  let isError = false
  let errorMessage = ''

  // Pass FormData values into a POST request
  // Mark form submission successful, otherwise return error state
  try {
    const res = await fetch(submitUrl, {
      method: 'POST',
      body: formData,
    })

    if (res.ok) {
      isSubmitted = true
    }
    else {
      throw new Error(`${res.status} Error`)
    }
  }
  catch (error) {
    isError = true
    if (error instanceof Error) {
      errorMessage = error.message
    }
  }

  return {
    isSubmitted,
    isError,
    errorMessage,
  }
}
