export const getUser = (user) => {
    return `
    <tr class="even:bg-gray-50">
      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 border text-center">${user.id}</td>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 border">${user.username}</td>
      <td class="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500 border">${user.email}</td>
    </tr>
    `
}