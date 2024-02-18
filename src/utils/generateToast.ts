
export const generateToast = (toast:any, type:string, message:string) => {
    return toast.current?.show({
        severity: type,
        summary: `${type == 'error' ? 'ERROR' : 'SUCCESS'}`,
        detail: message, life:   1000 })
}