<template>
    <vx-input-group class="search-box">
        <template slot="prepend">
            <div class="prepend-text btn-addon">
                <v-select
                    v-model="selectedOption"
                    :options="selectOptions"
                    label="name"
                    placeholder="Hamısı"
                    :dir="$vs.rtl ? 'rtl' : 'ltr'"
                />
            </div>
        </template>

        <vs-input
            v-model="searchText"
            placeholder="Açar sözləri daxil edin"
            class="input"
            size="large"
        />

        <template slot="append">
            <div class="append-text btn-addon">
                <vs-button
                    icon-pack="feather"
                    icon="icon-search"
                    :to="{ name: 'result' }"
                >
                    Axtar
                </vs-button>
            </div>
        </template>
    </vx-input-group>
</template>

<script>
import './style.scss';

export default {
    name: 'SearchBox',
    data() {
        return {
            selectOptions: [
                {
                    id: 1,
                    name: 'Nəşrlər'
                },
                {
                    id: 2,
                    name: 'Layihələr'
                },
                {
                    id: 3,
                    name: 'Mükafatlar'
                },
                {
                    id: 4,
                    name: 'Əqli mülkiyyət'
                },
                {
                    id: 5,
                    name: 'Tədqiqatçılar'
                },
                {
                    id: 6,
                    name: 'Dissertasiyalar'
                }
            ],
            selectedOption: null,
            searchText: ''
        };
    }
};
</script>
