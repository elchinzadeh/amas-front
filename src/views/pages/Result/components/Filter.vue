<template>
    <div>
        <h3 class="mb-4">Filter</h3>
        <vs-collapse type="margin" class="p-0">
            <!-- Category -->
            <vs-collapse-item class="mt-0" open>
                <div slot="header">
                    Kateqoriya
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in categories"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- SubCategory -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Alt kateqoriya
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in checkboxOptions"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Open access -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Açıq giriş (Open access)
                </div>
                <div>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Xeyr
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- ISI index -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    İSİ indeksli
                </div>
                <div>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Bəli
                                </vs-checkbox>
                            </li>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Xeyr
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Research areas -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Tədqiqat sahələri
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in checkboxOptions"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Date -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Tarix
                </div>
                <div>
                    <vs-row vs-justify="center">
                        <h6>
                            {{ selectedDateRange[0] }} -
                            {{ selectedDateRange[1] }}
                        </h6>
                        <vs-slider
                            step="1"
                            v-model="selectedDateRange"
                            :min="yearRange[0]"
                            :max="yearRange[1]"
                            class="w-full"
                        />
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- End Date -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Bitmə tarixi
                </div>
                <div>
                    <vs-row vs-justify="center">
                        <h6>
                            {{ selectedDateRange[0] }} -
                            {{ selectedDateRange[1] }}
                        </h6>
                        <vs-slider
                            step="1"
                            v-model="selectedDateRange"
                            :min="yearRange[0]"
                            :max="yearRange[1]"
                            class="w-full"
                        />
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Researchers -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Tədqiqatçılar
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in checkboxOptions"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Country -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Ölkə
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in checkboxOptions"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Faculty -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Fakültə
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in checkboxOptions"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Department -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Kafedra
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in checkboxOptions"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Profession -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    İxtisas
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in checkboxOptions"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Foreign language -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Xarici dil
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in checkboxOptions"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>

            <!-- Education country -->
            <vs-collapse-item class="mt-0">
                <div slot="header">
                    Təhsil aldığı ölkə
                </div>
                <div>
                    <vs-row class="mb-4">
                        <vs-input
                            size="small"
                            placeholder="Axtar"
                            v-model="searchInputValue"
                            class="w-full"
                        />
                    </vs-row>
                    <vs-row>
                        <ul>
                            <li class="mb-1">
                                <vs-checkbox>
                                    Hamısı
                                </vs-checkbox>
                            </li>
                            <li
                                v-for="option in checkboxOptions"
                                :key="option.id"
                                class="mb-1"
                            >
                                <vs-checkbox
                                    v-model="selectedOptions"
                                    :vs-value="option"
                                >
                                    {{ option.name }}
                                </vs-checkbox>
                            </li>
                        </ul>
                    </vs-row>
                </div>
            </vs-collapse-item>
        </vs-collapse>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
    name: "FilterSection",
    components: {
        Datepicker
    },
    data() {
        return {
            searchInputValue: "",
            categories: [
                {
                    id: 1,
                    name: "Tədqiqatçılar"
                },
                {
                    id: 2,
                    name: "Nəşrlər"
                },
                {
                    id: 3,
                    name: "Dissertasiyalar"
                },
                {
                    id: 4,
                    name: "Elmi dərəcə, ad və vəzifə"
                },
                {
                    id: 5,
                    name: "Layihələr"
                },
                {
                    id: 6,
                    name: "Təhsil məlumatları"
                },
                {
                    id: 7,
                    name: "Tədris etdiyi fənnlər"
                },
                {
                    id: 8,
                    name: "İş təcrübəsi"
                },
                {
                    id: 9,
                    name: "Elmi nəşlərdəki yeri"
                },
                {
                    id: 10,
                    name: "Əqli mülkiyyət"
                },
                {
                    id: 11,
                    name: "Müdafiə şurası vəzifəsi"
                },
                {
                    id: 12,
                    name: "Sertifikatlar"
                },
                {
                    id: 13,
                    name: "Mükafatlar"
                }
            ],
            checkboxOptions: [
                {
                    id: 1,
                    name: "Seçim 1"
                },
                {
                    id: 2,
                    name: "Seçim 2"
                },
                {
                    id: 3,
                    name: "Seçim 3"
                },
                {
                    id: 4,
                    name: "Seçim 4"
                }
            ],
            selectedOptions: [],
            yearRange: [2000, 2020],
            selectedDateRange: [2000, 2020],
            selectedEndDateRange: [2000, 2020]
        };
    }
};
</script>
