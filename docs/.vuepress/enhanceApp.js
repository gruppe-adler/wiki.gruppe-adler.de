export default ({ Vue, router, options }) => {

    // auto rdirect to german landing page
    router.addRoutes([
        { path: '/', redirect: '/de/' }
    ]);
}