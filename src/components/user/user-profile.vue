<template>
    <div>
        <a-page-header
                style="border: 1px solid rgb(235, 237, 240)"
                title="Title"
                subTitle="This is a subtitle"
        >
            <template slot="extra">
                <a-button key="3">Operation</a-button>
                <a-button key="2">Operation</a-button>
                <a-button key="1" type="primary">
                    Primary
                </a-button>
            </template>
            <div class="content">
                <div class="main">
                    <a-descriptions size="small" :column="2">
                        <a-descriptions-item label="Created">Lili Qu</a-descriptions-item>
                        <a-descriptions-item label="Association">
                            <a>421421</a>
                        </a-descriptions-item>
                        <a-descriptions-item label="Creation Time">2017-01-10</a-descriptions-item>
                        <a-descriptions-item label="Effective Time">2017-10-10</a-descriptions-item>
                        <a-descriptions-item label="Remarks">
                            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                        </a-descriptions-item>
                    </a-descriptions>
                </div>
                <div class="extra">
                    <div
                            :style="{
              display: 'flex',
              width: 'max-content',
              justifyContent: 'flex-end',
            }"
                    >
                        <a-statistic
                                title="Status"
                                value="Pending"
                                :style="{
                marginRight: '32px',
              }"
                        />
                        <a-statistic title="Price" prefix="$" :value="568.08"/>
                    </div>
                </div>
            </div>
        </a-page-header>
    </div>
</template>

<script>
    let that;
    export default {
        name: "UserProfile",
        data: () => {
            return {
            }
        },
        created() {
            that = this;
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
