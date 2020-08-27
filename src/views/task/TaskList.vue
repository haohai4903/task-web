<template>
    <div>
        <CommonList/>
    </div>
</template>

<script>
    import CommonList from "../../components/CommonList";
    import taskService from "../../service/TaskService";
    let that;
    const columns = {

    }
    export default {
        name: "TaskList",
        components: {CommonList},
        data: () => {
            return {
                listData: {
                    type: Array,
                    default() {
                        return [];
                    }
                },
                pagination: {
                    type: Object,
                    default() {
                        return {
                            current: 1,
                            pageSize: 20,
                            total: 0
                        }
                    }
                }
            }
        },
        created() {
            that = this;
            this.initData();
        },
        methods: {
            initData: () => {
                taskService.page({}).then(resp => {
                    that.listData = resp.data.list;
                    that.pagination = resp.data.pagination;
                })
            }
        }
    }
</script>

<style scoped>

</style>