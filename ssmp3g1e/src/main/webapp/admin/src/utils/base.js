const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmp3g1e/",
            name: "ssmp3g1e",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmp3g1e/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "网上租车系统"
        } 
    }
}
export default base
