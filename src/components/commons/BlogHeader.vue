<template>
    <a-layout-header id="components-layout-basic" class="header">
        <div class="logo">
            任务管理工具
        </div>
        <a-menu
                mode="horizontal"
                :defaultSelectedKeys="['1']"
                style="lineHeight: 64px;text-center: left;float: left"
                @click="handleNavBar"
        >
            <a-menu-item key="home">首页</a-menu-item>
        </a-menu>
        <a-dropdown style="float: right;padding-right: 10px;" v-if="user !=  undefined">
            <a class="ant-dropdown-link">
                <a-avatar size="default" icon="user" style="margin-right: 0px" v-if="user"/>
                {{user.name}}
            </a>
            <a-menu slot="overlay" @click="handleUserMenu">
                <a-menu-item key="profile">用户信息</a-menu-item>
                <a-menu-divider/>
                <a-menu-item key="logout">退出</a-menu-item>
            </a-menu>
        </a-dropdown>
        <div class="user" v-if="user == undefined">
            <a-button type="button" @click="login()">登录/注册</a-button>
        </div>
        <UserLoginModel :show-model="showModel" @handleCancel="cancelLogin"/>
    </a-layout-header>
</template>

<script>
    import UserLoginModel from '../../components/Login'
    import {LogOut} from "@/store/mutation_type";

    let that
    export default {
        name: 'BlogHeader',
        components: {
            UserLoginModel
        },
        data() {
            return {
                showModel: false
            }
        },
        computed: {
            user() {
                return that.$store.state.user
            }
        },
        methods: {
            login: () => {
                that.showModel = true
            },
            cancelLogin: () => {
                that.showModel = false;
            },
            handleUserMenu: (e) => {
                switch (e.key) {
                    case 'profile':
                        that.$router.push('user');
                        break;
                    case 'logout':
                        that.$store.commit(LogOut)
                        break;
                }
            },
            handleNavBar: (e) => {
                that.$router.push(e.key)
            }
        },
        created() {
            that = this
        }
    }
</script>

<style scoped>
    #components-layout-basic {
        padding: 0px 0px;
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
    }

    #components-layout-basic .logo {
        width: 120px;
        height: 31px;
        /*background: rgba(255, 255, 255, 0.2);*/
        float: left;
    }

    #components-layout-basic .user {
        float: right;
    }

</style>
