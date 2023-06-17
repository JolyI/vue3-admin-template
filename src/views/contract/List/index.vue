<template>
  <div>
    <el-form :ref="formRef" :model="form" :inline="true" class="search-form">
      <!-- 搜索表单内容 -->
      <el-form-item>
        <el-input v-model="form.key" placeholder="请输入搜索关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button @click="resetForm(formRef)">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border>
      <!-- 表格列 -->
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <!-- 其他列... -->
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" :total="total"
      layout="sizes, prev, pager, next, jumper"></el-pagination>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const form = ref({
      key: ''
    }); // 搜索关键字
    const currentPage = ref(1); // 当前页码
    const pageSize = ref(10); // 每页显示条数
    const total = ref(0); // 总条数
    const tableData = reactive([]); // 表格数据

    // 监听路由变化，重新获取数据
    watch(route, () => {
      fetchData();
    });

    // 搜索按钮点击事件
    const search = () => {
      currentPage.value = 1; // 搜索后重置页码为1
      fetchData();
    };

    // 处理分页大小变化
    const handleSizeChange = (val) => {
      pageSize.value = val;
      fetchData();
    };

    // 处理当前页码变化
    const handleCurrentChange = (val) => {
      currentPage.value = val;
      fetchData();
    };
    const resetForm = (formEl) => {
      if (!formEl) return
      formEl.resetFields()
    }

    // 模拟异步获取数据
    const fetchData = () => {
      // 发起请求获取数据
      // 可以根据搜索关键字、当前页码和每页显示条数进行筛选和分页查询
    }
  }
}
</script>

