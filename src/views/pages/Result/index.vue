<template>
    <div class="ResultPage">
        <vs-row class="mb-8">
            <!-- Search -->
            <vx-card>
                <SearchBox />
            </vx-card>
        </vs-row>
        <vs-row>
            <!-- Filter -->
            <vs-col vs-w="3" class="pr-2">
                <FilterSection />
            </vs-col>

            <!-- Results -->
            <vs-col vs-w="9" class="pl-2">
                <div class="flex items-end mb-4">
                    <h3>
                        Nəticələr
                    </h3>
                    <p class="ml-4">420 nəticə (39ms)</p>
                </div>
                <vx-card>
                    <vs-list>
                        <div
                            v-for="resultCategory in results"
                            :key="resultCategory.id"
                        >
                            <vs-list-header :title="resultCategory.name" />

                            <!-- Researcher -->
                            <div v-if="resultCategory.key === 'researcher'">
                                <Researcher
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Publication -->
                            <div v-if="resultCategory.key === 'publication'">
                                <Publication
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Thesis -->
                            <div v-if="resultCategory.key === 'thesis'">
                                <Thesis
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Academic Employement -->
                            <div
                                v-if="
                                    resultCategory.key === 'academicEmployement'
                                "
                            >
                                <AcademicEmployement
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Project -->
                            <div v-if="resultCategory.key === 'project'">
                                <Project
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Education -->
                            <div v-if="resultCategory.key === 'education'">
                                <Education
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Lesson -->
                            <div v-if="resultCategory.key === 'lesson'">
                                <Lesson
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Experience -->
                            <div v-if="resultCategory.key === 'experience'">
                                <Experience
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Journal Membership -->
                            <div
                                v-if="
                                    resultCategory.key === 'journalMembership'
                                "
                            >
                                <JournalMembership
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Intellectual Property -->
                            <div
                                v-if="
                                    resultCategory.key ===
                                        'intellectualProperty'
                                "
                            >
                                <IntellectualProperty
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Jury -->
                            <div v-if="resultCategory.key === 'jury'">
                                <Jury
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Certificate -->
                            <div v-if="resultCategory.key === 'certificate'">
                                <Certificate
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>

                            <!-- Award -->
                            <div v-if="resultCategory.key === 'award'">
                                <Award
                                    v-for="item in resultCategory.data"
                                    :key="item.id"
                                    :data="item"
                                />
                            </div>
                        </div>
                    </vs-list>
                </vx-card>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import SearchBox from "@/views/components/SearchBox";
import {
    Filter,
    Researcher,
    Publication,
    Thesis,
    AcademicEmployement,
    Project,
    Education,
    Lesson,
    Experience,
    JournalMembership,
    IntellectualProperty,
    Jury,
    Certificate,
    Award
} from "./components";
import "./style.scss";

export default {
    name: "Result",
    components: {
        SearchBox,
        FilterSection: Filter,
        Researcher,
        Publication,
        Thesis,
        AcademicEmployement,
        Project,
        Education,
        Lesson,
        Experience,
        JournalMembership,
        IntellectualProperty,
        Jury,
        Certificate,
        Award
    },
    data() {
        return {
            results: [
                {
                    id: 1,
                    key: "researcher",
                    name: "Tədqiqatçılar",
                    data: [
                        {
                            id: 1,
                            name: "Vilayət Vəliyev",
                            position: "Rektor, Professor",
                            image: ""
                        },
                        {
                            id: 2,
                            name: "Mərziyyə Ağayeva",
                            position: "Kimya üzrə fəlsəfə doktoru",
                            image: null
                        },
                        {
                            id: 3,
                            name: "Elçin Zəkizadə",
                            position: "Elmi işçi",
                            image: ""
                        }
                    ]
                },
                {
                    id: 2,
                    key: "publication",
                    name: "Nəşrlər",
                    data: [
                        {
                            id: 1,
                            name: "İnformasiya Texnologiyaları Problemləri ",
                            authors: [
                                {
                                    id: 1,
                                    name: "Elchin Zakizadeh"
                                },
                                {
                                    id: 2,
                                    name: "Kirk Hammett"
                                }
                            ],
                            journal: {
                                name: "International Astronautical Congress",
                                volume: "12th",
                                page: 369,
                                index: "ICITS",
                                date: "9 Avqust 2012",
                                country: "Azerbaijan",
                                city: "Baku"
                            }
                        }
                    ]
                },
                {
                    id: 3,
                    key: "thesis",
                    name: "Dissertasiyalar",
                    data: [
                        {
                            id: 1,
                            name: "Rəqəmsal sistemlərin arxitekturası",
                            author: {
                                id: 1,
                                name: "Elchin Zakizadeh"
                            },
                            educationLevel: "Doktorantura",
                            date: "Mart  2022 - Mart 2023"
                        }
                    ]
                },
                {
                    id: 4,
                    key: "academicEmployement",
                    name: "Elmi dərəcə, ad və vəzifə",
                    data: [
                        {
                            id: 1,
                            name: "Heyət",
                            position: "Dos. Dr.",
                            organization: "AzTU",
                            faculty: "AKT",
                            date: "Iyun 2019"
                        }
                    ]
                },
                {
                    id: 5,
                    key: "project",
                    name: "Layihələr",
                    data: [
                        {
                            id: 1,
                            name: "Robotlaşdırılma",
                            authors: [
                                {
                                    id: 1,
                                    name: "Elchin Zakizadeh"
                                },
                                {
                                    id: 2,
                                    name: "Kirk Hammett"
                                }
                            ],
                            type: "Dövlət dəstəkli layihə",
                            date: "May 2019"
                        }
                    ]
                },
                {
                    id: 6,
                    key: "education",
                    name: "Təhsil məlumatları",
                    data: [
                        {
                            id: 1,
                            name: "Bakalavr təhsili",
                            organization: "AzTU",
                            profession: "Kompüter mühəndisliyi",
                            date: "Sentyabr 2016 - Davam edir"
                        }
                    ]
                },
                {
                    id: 7,
                    key: "lesson",
                    name: "Tədris etdiyi fənnlər",
                    data: [
                        {
                            id: 1,
                            name: "Süni intellektin əsasları",
                            author: "Andrew NG",
                            department: "ITP",
                            date: "3 April 2017 - 21 October 2019"
                        }
                    ]
                },
                {
                    id: 8,
                    key: "experience",
                    name: "İş təcrübəsi",
                    data: [
                        {
                            id: 1,
                            name: "Dekan",
                            place: "Azerbaijan texhnical University",
                            faculty: "AKT",
                            date: "3 April 2017 - 21 October 2019"
                        }
                    ]
                },
                {
                    id: 9,
                    key: "journalMembership",
                    name: "Elmi nəşlərdəki yeri",
                    data: [
                        {
                            id: 1,
                            name: "Nature",
                            position: "Müəllif",
                            date: "3 Aprel 2017 - 21 Oktyabr 2019"
                        }
                    ]
                },
                {
                    id: 10,
                    key: "intellectualProperty",
                    name: "Əqli mülkiyyət",
                    data: [
                        {
                            id: 1,
                            name: "Patent",
                            authors: [
                                {
                                    id: 1,
                                    name: "Elchin Zakizadeh"
                                },
                                {
                                    id: 2,
                                    name: "Kirk Hammett"
                                }
                            ],
                            date: "9 Avqust 2022",
                            department: "KS və Ş"
                        }
                    ]
                },
                {
                    id: 11,
                    key: "jury",
                    name: "Müdafiə şurası vəzifəsi",
                    data: [
                        {
                            id: 1,
                            name: "Elmi rəhbər",
                            date: "9 Avqust 2022"
                        }
                    ]
                },
                {
                    id: 12,
                    key: "certificate",
                    name: "Sertifikatlar",
                    data: [
                        {
                            id: 1,
                            name: "Sürətləndirilmiş İngilis dili kusrsu",
                            date: "9 Avqust 2022",
                            field: "İKT"
                        }
                    ]
                },
                {
                    id: 13,
                    key: "award",
                    name: "Mükafatlar",
                    data: [
                        {
                            id: 1,
                            name: "Əməkdar elm xadimi",
                            authors: [
                                {
                                    id: 1,
                                    name: "Vilayət Vəliyev"
                                }
                            ],
                            date: "14 May 2014",
                            place: "AzTU"
                        }
                    ]
                }
            ]
        };
    }
};
</script>
