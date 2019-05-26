<template>
    <page showHeader showBack title="个人设置">
        <div slot="body" class="setting-container">
            <div class="setting-item">
                <listitem title="头像" indicator>
                    <img slot="right" class="avator" src="http://pic34.nipic.com/20131026/9422601_213844930000_2.jpg" alt="avator" />
                </listitem>
                <listitem bottom='hidden' title="昵称" indicator>
                    <span slot="right" class="main-title">会飞的余先生</span>
                </listitem>
            </div>
            <div class="setting-item">
                <listitem title="手机号码" indicator>
                    <span slot="right" class="main-title">180****3456</span>
                </listitem>
                <listitem bottom='hidden' title="修改密码" indicator>
                </listitem>
            </div>
            <div class="setting-item">
                <listitem title="关于银犁" indicator>
                </listitem>
                <listitem bottom='hidden' title="APP版本">
                    <span slot="right" class="main-title">V4.4.1</span>
                </listitem>
            </div>
        </div>
    </page>
</template>

<script>
export default {
    data () {
      return {
      };
    },

    components: {
    },

    created () {
    },

    computed: {
    },

    mounted() {
    },

    methods: {
    }
}
</script>
<style lang="scss" scoped>
    .setting-container {padding-top: 10px;background: $c_primary_bg1;height: 100%;}
    .main-title {font-size: r_px(15);color: $c_primary_item_text;}
    .setting-item {margin: 0px 0px 10px;}
    .avator {border-radius: r_px(60);height: r_px(60);width: r_px(60)}
</style>
