<template>
    <yd-pullrefresh :callback="loadList" ref="pullrefreshDemo">

        <yd-list theme="4">
    <comcont></comcont>
        </yd-list>

    </yd-pullrefresh>
</template>

<script type="text/babel">
	import comcont from '@/components/com-Cont.vue'
    export default {
        data() {
            return {
                page: 1,
            }
        },
        methods: {
            loadList() {
            	console.log(999)
                const url = 'http://list.ydui.org/getdata.php';

                this.$http.jsonp(url, {params: {type: 'pulldown', page: this.page}}).then((response) => {

                    const _list = response.body;

                    this.$dialog.toast({
                        mes: _list.length > 0 ? '为您更新了' + _list.length + '条内容' : '已是最新内容'
                    });

                    this.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');

                    this.page++;
                });
            }
        },
        		components: {
		
			comcont
			
		}
    }
</script>