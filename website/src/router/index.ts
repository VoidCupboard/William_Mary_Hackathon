import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Explore from "../views/Explore.vue";
import ActiveTerms from "../views/ActiveTerms.vue";
import SubjectList from "../views/SubjectsList.vue";
import CourseSections from "../views/CourseSections.vue";
import CourseSection from "../views/CourseSection.vue";
import SubjectOpenCourse from "../views/SubjectsOpenCourses.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/explore",
            name: "Explore",
            component: Explore
        },
        {
            path: "/activeterms",
            name: "Active Terms",
            component: ActiveTerms
        },
        {
            path: "/subjectlist",
            name: "Subject List",
            component: SubjectList
        },
        {
            path: "/coursesections",
            name: "CourseSections",
            component: CourseSections
        },
        {
            path: "/coursesection/:id",
            name: "CourseSection",
            component: CourseSection
        },
        {
            path: "/opencourses/subject",
            name: "Subject OpenCourse",
            component: SubjectOpenCourse
        },
        {
            path: "/opencourse/:term_id/:subject_id",
            name: "Subject OpenCourse",
            component: SubjectOpenCourse
        }
    ],
});

export default router;
