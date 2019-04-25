<template>
  <div class="tinymce-wrap">
    <el-form :model="addBlogForm" :rules="rules" ref="addBlogForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="addBlogForm.title"></el-input>
      </el-form-item>
      <el-form-item label="摘要" prop="submit">
        <el-input v-model="addBlogForm.submit"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="type">
        <el-radio-group v-model="addBlogForm.category_id">
          <el-radio label="0" name="VUE">VUE</el-radio>
          <el-radio label="1" name="JS">JS</el-radio>
          <el-radio label="2" name="NUXT">NUXT</el-radio>
          <el-radio label="3" name="H5C3">H5C3</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="正文" prop="content" class="tox-textarea-box">
        <Editor id="tinymce" v-model="addBlogForm.content" :init="editorInit"></Editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addBlogForm')">立即创建</el-button>
        <el-button @click="resetForm('addBlogForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import Editor from '@tinymce/tinymce-vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: '',
    components: {
      Editor
    },
    middleware: 'auth',
    props:{
    },
    layout:'blog',
    data() {
      return {
        editorInit: {
          language_url: '/static/tinymce/zh_CN.js',
          language: 'zh_CN',
          height: 600,
          plugins: 'link lists image code table wordcount paste importcss advlist fullscreen media hr preview',
          toolbar:
            'styleselect | fontselect | formatselect | bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | preview removeformat hr | image  media | table | paste code  link | fullscreen',
          branding: false
        },
        addBlogForm: {
          title: '',
          content: '',
          submit: '',
          category_id: 0,
        },
        rules: {
          title: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
            { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请填写文章内容', trigger: 'blur' }
          ],
          submit: [
            { required: true, message: '请输入文章摘要', trigger: 'blur' },
            { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
          ],
          category_id: [
            { required: true, message: '请选择文章分类', trigger: 'change' }
          ]
        }
      }
    },
    computed: {
    },
    created() {
    },
    mounted() {
      tinymce.init({})
    },
    methods: {
      ...mapActions('tinymce', ['addBlog']),

      handleImgUpload (blobInfo, success, failure) {
        let formdata = new FormData()
        formdata.set('upload_file', blobInfo.blob())
        axios.post('/api/upload', formdata).then(res => {
          success(res.data.data.src)
        }).catch(res => {
          failure('error')
        })
      },
      submitForm(formName) {
        // let that = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.addBlog(this.addBlogForm)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>
<style lang="scss">
.tinymce-wrap{
  .el-form{
    background-color: #fff;
    padding: 10px;
    .el-input{
      max-width: 600px;
    }
    .tox-textarea-box{
      height: auto;
      .el-form-item__content{
        height: auto;
        .tox-tinymce{
          max-width: 800px;
        }
      }
    }
  }
}
</style>