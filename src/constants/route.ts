const rootRoute = ""

const Route = Object.freeze({
   root: rootRoute,
   driver: rootRoute,
   introduction: `${rootRoute}/introduction`,

   system: `${rootRoute}/system`,
   admin: `${rootRoute}/system/admin`,
   teamMember: `${rootRoute}/system/team-member`,
})

export default Route