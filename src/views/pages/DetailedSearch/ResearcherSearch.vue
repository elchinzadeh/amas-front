<template>
    <div class="mt-1 pl-2 py-8 flex justify-center">
        <vs-col vs-w="6">
            <vs-row class="mb-4">
                <vs-col vs-w="3">
                    Ad, soyad, ata adı
                </vs-col>
                <vs-col vs-w="9">
                    <vs-input class="w-full" />
                </vs-col>
            </vs-row>
            <vs-row class="mb-4">
                <vs-col vs-w="3">
                    Elmi dərəcəsi
                </vs-col>
                <vs-col vs-w="9">
                    <v-select
                        :options="academicDegrees"
                        label="name"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    />
                </vs-col>
            </vs-row>
            <vs-row class="mb-4">
                <vs-col vs-w="3">
                    Elmi adı
                </vs-col>
                <vs-col vs-w="9">
                    <v-select
                        :options="academicNames"
                        label="name"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    />
                </vs-col>
            </vs-row>
            <vs-row class="mb-4">
                <vs-col vs-w="3">
                    Fakültə
                </vs-col>
                <vs-col vs-w="9">
                    <v-select
                        v-model="searchData.facultyId"
                        :options="faculties"
                        label="name"
                        :reduce="faculty => faculty.id"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    />
                </vs-col>
            </vs-row>
            <vs-row class="mb-4">
                <vs-col vs-w="3">
                    Kafedra
                </vs-col>
                <vs-col vs-w="9">
                    <v-select
                        :options="departments"
                        label="name"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    />
                </vs-col>
            </vs-row>
            <vs-row class="mb-4">
                <vs-col vs-w="3">
                    İxtisas
                </vs-col>
                <vs-col vs-w="9">
                    <v-select
                        :options="professions"
                        label="name"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    />
                </vs-col>
            </vs-row>
            <vs-row class="mb-4">
                <vs-col vs-w="3">
                    Tədqiqat sahəsi
                </vs-col>
                <vs-col vs-w="9">
                    <v-select
                        :options="options"
                        label="name"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    />
                </vs-col>
            </vs-row>
            <vs-row class="mb-4">
                <vs-col vs-w="3">
                    Xarici dil
                </vs-col>
                <vs-col vs-w="9">
                    <v-select
                        :options="options"
                        label="name"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    />
                </vs-col>
            </vs-row>
            <vs-row class="mb-4">
                <vs-col vs-w="3">
                    Təhsil aldığı ölkə
                </vs-col>
                <vs-col vs-w="9">
                    <v-select
                        :options="options"
                        label="name"
                        :dir="$vs.rtl ? 'rtl' : 'ltr'"
                    />
                </vs-col>
            </vs-row>
            <vs-row
                vs-justify="flex-end"
                class="mt-8"
            >
                <vs-button
                    color="primary"
                    type="filled"
                    icon-pack="feather"
                    icon="icon-arrow-right"
                    icon-after
                    :to="{ name: 'result' }"
                >
                    Axtar
                </vs-button>
            </vs-row>
        </vs-col>
    </div>
</template>

<script>
import vSelect from 'vue-select';
import academicDegrees from '@/data/academicDegrees.json';
import academicNames from '@/data/academicNames.json';
import faculties from '@/data/faculties.json';
import departments from '@/data/departments.json';
import professions from '@/data/professions.json';

export default {
    name: 'ReseacherSearch',
    components: {
        'v-select': vSelect
    },
    data() {
        return {
            options: [],
            academicDegrees,
            academicNames,
            faculties,
            departments,
            searchData: {
                facultyId: null
            }
        };
    },
    computed: {
        professions() {
            return professions.filter(p => p.faculty_id === this.searchData.facultyId);
        }
    }
};
</script>
