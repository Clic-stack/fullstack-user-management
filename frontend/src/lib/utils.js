export const formatDate = (date) => {
    if (!date) return "No date";
    return date.split('T')[0]
}