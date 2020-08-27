<template>
    <a-table :columns="columns" :data-source="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
    </a-table>
    <a-pagination v-model="pagination.current" :total="pagination.total" :pageSize.sync="pagination.pageSize" show-less-items @change="changePage"/>
</template>

<script>
    export default {
        name: "CommonList",
        props: {
            columns: {
                type: Array
            },
            data: {
                type: Array
            },
            pagination: {
                type: Object,
                default() {
                    return {
                        current: 1,
                        total: 0,
                        pageSize: 20
                    }
                }
            }
        },
        methods: {
            changePage: function (page) {
                this.$emit("changePage", page);
            }
        }
    }
</script>

<style scoped>

</style>