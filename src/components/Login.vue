<template>
    <a-modal :visible="showModel" title="Title" @cancel="handleCancel" :mast="true" :destroyOnClose="true">
        <template slot="footer">
            <a-button key="submit" type="primary" :loading="loading" @click="handleSubmit">
                登录
            </a-button>
        </template>
        <a-form :form="formConfig">
            <a-form-item>
                <a-input type="text" v-decorator="['username',{ rules: [rules.username] }]">
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input v-decorator="['password',{ rules: [rules.password] }]">
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script>
    import {Login, UserInfo} from "@/store/mutation_type";

    let that;
    import qs from 'qs'

    export default {
        name: "UserLoginModel",
        props: {
            showModel: {
                type: Boolean
            }
        },
        beforeCreate() {
            this.formConfig = this.$form.createForm(this, {name: '用户登录'})
        },
        created() {
            that = this;
        },
        data: () => {
            return {
                //可视的
                form: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: {required: true, message: '请输入用户名', trigger: 'blur'},
                    password: {required: true, message: '请输入密码', trigger: 'blur', maxLength: 20},
                },
                loading: false,
            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault()
                that.formConfig.validateFields((err, value) => {
                    if (!err) {
                        const params = {...value};
                        that.$store.dispatch(Login, params).then(respData => {
                            if (!respData.code) {
                                that.$store.dispatch(UserInfo, respData.token);
                                this.handleCancel();
                            }
                        })
                    }
                })
            },
            handleCancel() {
                console.info('cancel')
                that.$emit('handleCancel')
            }
        }
    }
</script>

<style scoped>

</style>
