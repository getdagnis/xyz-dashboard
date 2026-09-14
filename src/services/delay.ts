const delayMs = 100

export function delayed<T>(createValue: () => T, signal?: AbortSignal): Promise<T> {
  return new Promise((resolve, reject) => {
    const rejectAsAborted = () => reject(new DOMException('The request was aborted', 'AbortError'))

    if (signal?.aborted) {
      rejectAsAborted()
      return
    }

    const onAbort = () => {
      clearTimeout(timeout)
      signal?.removeEventListener('abort', onAbort)
      rejectAsAborted()
    }
    const timeout = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort)
      resolve(createValue())
    }, delayMs)

    signal?.addEventListener('abort', onAbort, { once: true })
  })
}
