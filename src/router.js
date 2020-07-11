import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        // =============================================================================
        // MAIN LAYOUT ROUTES
        // =============================================================================
        {
            path: "",
            component: () => import("./layouts/main"),
            children: [
                {
                    path: "/",
                    name: "home",
                    component: () => import("./views/pages/Home")
                },
                {
                    path: "/detailed-search",
                    name: "detailedSearch",
                    component: () => import("./views/pages/DetailedSearch")
                },
                {
                    path: "/result",
                    name: "result",
                    component: () => import("./views/pages/Result")
                },
                {
                    path: "/publication/:id",
                    name: "publication",
                    component: () => import("./views/pages/Publication")
                },
                {
                    path: "/project/:id",
                    name: "project",
                    component: () => import("./views/pages/Project")
                },
                {
                    path: "/researcher/:id/",
                    component: () => import("./views/pages/Researcher"),
                    children: [
                        {
                            path: "education",
                            name: "researcher.education",
                            component: () =>
                                import("./views/pages/Researcher/Education")
                        },
                        {
                            path: "researchAreas",
                            name: "researcher.researchAreas",
                            component: () =>
                                import("./views/pages/Researcher/ResearchAreas")
                        },
                        {
                            path: "experience",
                            name: "researcher.experience",
                            component: () =>
                                import("./views/pages/Researcher/Experience")
                        },
                        {
                            path: "publications",
                            name: "researcher.publications",
                            component: () =>
                                import("./views/pages/Researcher/Publications")
                        },
                        {
                            path: "projects",
                            name: "researcher.projects",
                            component: () =>
                                import("./views/pages/Researcher/Projects")
                        },
                        {
                            path: "academicActivity",
                            name: "researcher.academicActivity",
                            component: () =>
                                import(
                                    "./views/pages/Researcher/AcademicActivity"
                                )
                        },
                        {
                            path: "achievements",
                            name: "researcher.achievements",
                            component: () =>
                                import("./views/pages/Researcher/Achievements")
                        },
                        {
                            path: "announcements",
                            name: "researcher.announcements",
                            component: () =>
                                import("./views/pages/Researcher/Announcements")
                        },
                        {
                            path: "contact",
                            name: "researcher.contact",
                            component: () =>
                                import("./views/pages/Researcher/Contact")
                        }
                    ]
                }
            ]
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: "",
            component: () => import("@/layouts/full-page/FullPage.vue"),
            children: [
                {
                    path: "/login",
                    name: "login",
                    component: () => import("@/views/pages/Login.vue")
                },
                {
                    path: "/registration",
                    name: "registration",
                    component: () => import("@/views/pages/Registration.vue")
                },
                {
                    path: "/error-404",
                    name: "page-error-404",
                    component: () => import("@/views/pages/Error404.vue")
                }
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: "*",
            redirect: "/pages/error-404"
        }
    ]
});

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById("loading-bg");
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

export default router;
