<template>
  <div>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="140px" size="default">
      <el-collapse v-model="collapse.baseInfoNames">
        <div class="module-block">
          <el-collapse-item title="基本信息" name="baseInfo">
            <el-row :gutter="15">
              <el-col :span="spanCol">
                <el-form-item label="合同号" prop="number">
                  <el-input :maxlength="100" v-model="form.number" clearable placeholder="请输入合同号" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同名称" prop="name">
                  <el-input :maxlength="100" v-model="form.name" clearable placeholder="请输入合同名称" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同签订日期" prop="signDate">
                  <el-date-picker v-model="form.signDate" placeholder="请选择合同签订日期" format="YYYY-MM-DD" clearable />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同性质" prop="nature">
                  <el-select v-model="form.nature" placeholder="请选择合同性质">
                    <el-option v-for="item in NatureContractOption" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同号-对方" prop="oppositeNumber">
                  <el-input :maxlength="100" v-model="form.oppositeNumber" clearable placeholder="请输入合同号-对方" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同分类" prop="classification">
                  <el-select v-model="form.classification" placeholder="请选择合同分类">
                    <el-option v-for="item in TypeOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同生效日期" prop="effectivenessDate">
                  <el-date-picker v-model="form.effectivenessDate" placeholder="请选择合同生效日期" format="YYYY-MM-DD"
                    clearable />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="费用需求部门" prop="费用需求部门">
                  <el-cascader v-model="form.costDeptId" placeholder="请选择费用需求部门" :options="costDeptOptions"
                    show-all-levels :props="cascaderProps" />
                </el-form-item>
                <el-form-item v-if="false" label="" prop="costDeptName"><el-input :maxlength="100"
                    v-model="form.costDeptName" placeholder="" hidden /></el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="单据状态" prop="documentStatus">
                  <el-select v-model="form.documentStatus" placeholder="请选择单据状态">
                    <el-option v-for="item in DocumentStatusOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同类型" prop="type">
                  <el-select v-model="form.type" placeholder="请选择合同类型">
                    <el-option v-for="item in ContractTypeOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同结束日期" prop="endDate">
                  <el-date-picker v-model="form.endDate" placeholder="请选择合同结束日期" format="YYYY-MM-DD" clearable />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="是否公共业务(按产线分)" prop="publicBusiness">
                  <el-select v-model="form.publicBusiness" placeholder="请选择是否公共业务（按产线分）">
                    <el-option v-for="item in PublicServiceOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署公司" prop="signCompanyId">
                  <el-select v-model="form.signCompanyId" placeholder="请选择签署公司">
                    <el-option v-for="item in signCompanyoptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同主从" prop="masterSlave">
                  <el-select v-model="form.masterSlave" placeholder="请选择合同主从">
                    <el-option v-for="item in ContractMasterSlaveOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="预计交付时间" prop="deliverDate">
                  <el-date-picker v-model="form.deliverDate" placeholder="请选择合同结束日期" format="YYYY-MM-DD" clearable />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="分摊规则" prop="allocationRule">
                  <el-select v-model="form.allocationRule" placeholder="请选择分摊规则">
                    <el-option v-for="item in AllocationRulesOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署部门" prop="signDeptId">
                  <el-select v-model="form.signDeptId" placeholder="请选择签署部门">
                    <el-option v-for="item in []" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同状态" prop="contractStatus">
                  <el-select v-model="form.contractStatus" placeholder="请选择合同状态">
                    <el-option v-for="item in ContractStatusOption" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署方式" prop="signWay">
                  <el-select v-model="form.signWay" placeholder="请选择签署方式">
                    <el-option v-for="item in SignModelOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同-内/外部" prop="insideOutside">
                  <el-select v-model="form.insideOutside" placeholder="请选择合同-内/外部">
                    <el-option v-for="item in ContractSideOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署执行人" prop="signPersonId">
                  <el-select v-model="form.signPersonId" placeholder="请选择签署执行人">
                    <el-option v-for="item in []" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="套用范本" prop="template">
                  <el-select v-model="form.template" placeholder="请选择套用范本">
                    <el-option v-for="item in ApplyExampleOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签约类型" prop="signType">
                  <el-select v-model="form.signType" placeholder="请选择签约类型">
                    <el-option v-for="item in SignTypelOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="所属集团" prop="groups">
                  <el-select v-model="form.groups" placeholder="请选择所属集团">
                    <el-option v-for="item in CompanyOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="上游单据号" prop="documentNumber">
                  <el-input :maxlength="100" v-model="form.documentNumber" clearable placeholder="请输入上游单据号" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同版本" prop="version">
                  <el-input :maxlength="100" v-model="form.version" clearable placeholder="请输入合同版本" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="签署地点" prop="signAddress">
                  <el-input :maxlength="100" v-model="form.signAddress" clearable placeholder="请输入签署地点" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="动作" prop="action">
                  <el-input :maxlength="100" v-model="form.action" clearable placeholder="请输入动作" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注" prop="remark">
                  <el-input :maxlength="500" v-model="form.remark" type="textarea" :autosize="{ minRows: 2, maxRows: 10 }"
                    show-word-limit clearable placeholder="请输入备注" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </div>
      </el-collapse>
      <el-collapse v-model="collapse.finanicalInfo">
        <div class="module-block">
          <el-collapse-item title="财务信息" name="finanicalInfo">
            <el-row :gutter="15">
              <el-col :span="spanCol">
                <el-form-item label="合同金额(含税)大写" prop="totalAmountChn">
                  <el-input :maxlength="100" disabled v-model="form.totalAmountChn" clearable placeholder="自动转化大写" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同总额(含税)" prop="totalAmount">
                  <el-input-number :min="0" precision="2" controls-position="right" v-model="form.totalAmount" clearable
                    placeholder="请输入合同总额（含税）" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="结算方式" prop="paymentMethod">
                  <el-select v-model="form.paymentMethod" placeholder="请选择结算方式">
                    <el-option v-for="item in SettlementOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="产量" prop="yield">
                  <el-input-number :min="0" precision="2" controls-position="right" v-model="form.yield" clearable
                    placeholder="请输入产量" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同总额(不含税)" prop="amount">
                  <el-input-number :min="0" precision="2" controls-position="right" v-model="form.amount" clearable
                    placeholder="请输入合同总额（不含税）" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="税率" prop="taxRate">
                  <el-select v-model="form.taxRate" placeholder="请选择税率">
                    <el-option v-for="item in TaxRateOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="开票方式" prop="billingMethond">
                  <el-select v-model="form.billingMethond" placeholder="请选择开票方式">
                    <el-option v-for="item in InvoiceMethodOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="单价/吨" prop="unitPrice">
                  <el-input-number :min="0" precision="2" controls-position="right" v-model="form.unitPrice" clearable
                    placeholder="请输入单价/吨" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="税额" prop="taxAmount">
                  <el-input-number :min="0" precision="2" controls-position="right" v-model="form.taxAmount" clearable
                    placeholder="请输入税额" />
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="币别" prop="currency">
                  <el-select v-model="form.currency" placeholder="请选择币别">
                    <el-option v-for="item in CurrencyOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="是否需要付款" prop="needPay">
                  <el-select v-model="form.needPay" placeholder="请选择是否需要付款">
                    <el-option v-for="item in ISNeedPaymentOptions" :key="item.value" :label="item.label"
                      :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spanCol">
                <el-form-item label="合同金额(产量合同)" prop="totalAmount">
                  <el-input-number :min="0" precision="2" controls-position="right" v-model="form.totalAmount" clearable
                    placeholder="请输入合同金额(产量合同)" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="备注" prop="financeRemark">
                  <el-input :maxlength="500" v-model="form.financeRemark" type="textarea"
                    :autosize="{ minRows: 2, maxRows: 10 }" show-word-limit clearable placeholder="请输入备注" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-collapse-item>
        </div>
      </el-collapse>
      <el-collapse v-model="collapse.ledgerInfo">
        <div class="module-block">
          <el-collapse-item title="台账信息" name="ledgerInfo">
            <div class="space-right">
              <el-button type="primary" size="small" @click="addRow">新增</el-button>
            </div>
            <el-tabs v-model="tabName" class="demo-tabs">
              <el-tab-pane label="付款条件" name="paymentPlan">
                <el-table :data="paymentPlan">
                  <el-table-column label="#" type="index" width="80" />
                  <el-table-column label="款项类型" prop="paymentType" width="120">
                    <template #default="scope">
                      <span>{{ findLabel(PaymentTypeOptions, scope.row.paymentType) }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="付款比例" prop="paymentRatio">
                    <template #default="scope">
                      <span>{{ findLabel(PaymentRatioOptions, scope.row.paymentRatio) }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="付款条件" prop="paymentTerms"></el-table-column>
                  <el-table-column label="付款时间" prop="paymentTime" width="200"></el-table-column>
                  <el-table-column label="应付金额" prop="payable"></el-table-column>
                  <el-table-column label="备注" prop="remark"></el-table-column>
                  <el-table-column label="操作">
                    <template #default="{ row }">
                      <el-button type="danger" link @click="onRemove">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="相对方" name="supplier">
                <el-table :data="supplierDataSource">
                  <el-table-column label="#" type="index" width="50" />
                  <el-table-column label="相对方" prop="code">
                    <template #default="{ row }">
                      <span>{{ findLabel(CounterpartOptions, row.party) }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="相对方名称" prop="name"></el-table-column>
                  <!-- <el-table-column label="相对方地址" prop="相对方地址"></el-table-column>
                  <el-table-column label="法定代表人" prop="法定代表人"></el-table-column>
                  <el-table-column label="授权代理人" prop="授权代理人"></el-table-column>
                  <el-table-column label="开户行" prop="开户行"></el-table-column>
                  <el-table-column label="账户" prop="账户"></el-table-column> -->
                  <el-table-column label="统一社会信用码" prop="taxNumber"></el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="发票信息" name="invoice"></el-tab-pane>
              <el-tab-pane label="付款申请" name="apply"></el-tab-pane>
              <el-tab-pane label="产线和明细" name="lines">
                <el-table :data="linesData">
                  <el-table-column label="#" width="80" type="index"></el-table-column>
                  <el-table-column label="产线名称" prop="lineName"></el-table-column>
                  <el-table-column label="公共业务分摊比例（%）" prop="elementName" width="200"></el-table-column>
                  <el-table-column label="费用要素" prop="ratio"></el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </el-collapse-item>
        </div>
      </el-collapse>
      <other-file :mode="props.mode" />
      <el-form-item style="{margin-top: 30;}">
        <div class="space-right">
          <el-button type="primary" @click="onSubmit(formRef)">提交</el-button>
        </div>
      </el-form-item>
    </el-form>
    <!-- 付款条件 -->
    <el-dialog title="新增付款条件" v-model="paymentPlanDialog.visible">
      <el-form v-loading="paymentPlanDialog.loading" :model="paymentPlanDialog.form" ref="paymentPlanDialogformRef"
        :rules="paymentPlanDialogRules" label-width="120" size="large">
        <el-form-item label="款项类型" prop="paymentType">
          <el-select v-model="paymentPlanDialog.form.paymentType" placeholder="请选择款项类型">
            <el-option v-for="item in PaymentTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="付款比例" prop="paymentRatio">
          <el-select v-model="paymentPlanDialog.form.paymentRatio" placeholder="请选择款项类型">
            <el-option v-for="item in PaymentRatioOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="付款条件" prop="paymentTerms">
          <el-input :maxlength="100" v-model="paymentPlanDialog.form.paymentTerms" placeholder="请输入付款条件"
            clearable></el-input>
        </el-form-item>
        <el-form-item label="付款时间" prop="paymentTime">
          <el-date-picker v-model="paymentPlanDialog.form.paymentTime" placeholder="请选择付款时间" format="YYYY-MM-DD" clearable
            :style="{ width: '100%' }" />
        </el-form-item>
        <el-form-item label="应付金额" prop="payable">
          <el-input-number :min="0" precision="2" controls-position="right" v-model="paymentPlanDialog.form.payable"
            placeholder="请输入应付金额" :style="{ textAlign: 'left' }"></el-input-number>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input :maxlength="100" v-model="paymentPlanDialog.form.remark" placeholder="请输入备注"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="default" @click="onSubmitPaymentPlanCancel">取消</el-button>
        <el-button type="primary" @click="onSubmitPaymentPlan(paymentPlanDialogformRef)">确定</el-button>
      </template>
    </el-dialog>
    <!-- 相对方 -->
    <el-dialog title="添加相对方" v-model="supplierDialog.visible" width="650" @close="onSupplierSelectClose">
      <el-table class="supplier-dialog" ref="supplierDialogtableRef" v-loading="supplierDialog.loading"
        :data="supplierDialog.dataSource" @select="onSupplierChange" row-key="id" :max-height="'60vh'">
        <el-table-column type="selection" width="55" />
        <el-table-column label="#" type="index" width="80" />
        <el-table-column label="相对方" prop="code">
          <template #default="{ row }">
            <el-select v-model="row.party" placeholder="请选择相对方" size="mini">
              <el-option v-for=" item  in  CounterpartOptions " :key="item.value" :label="item.label"
                :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="相对方名称" prop="name"></el-table-column>
        <!-- <el-table-column label="相对方地址" prop="相对方地址"></el-table-column>
        <el-table-column label="法定代表人" prop="法定代表人"></el-table-column>
        <el-table-column label="授权代理人" prop="授权代理人"></el-table-column>
        <el-table-column label="开户行" prop="开户行"></el-table-column>
        <el-table-column label="账户" prop="账户"></el-table-column> -->
        <el-table-column label="统一社会信用码" prop="taxNumber"></el-table-column>
      </el-table>
      <template #footer>
        <div class="space-right">
          <el-button type="default" @click="onSupplierSelectClose">取消</el-button>
          <el-button type="primary" @click="onSupplierSelectOk">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog title="新增产线和明细" v-model="linesDialog.visible" @close="onLineCancel(linesDialogFormRef)">
      <el-form v-loading="linesDialog.loading" ref="linesDialogFormRef" :model="linesNameOptions" label-width="160"
        size="large">
        <el-form-item label="所属集团" prop="groups">
          <el-select v-model="linesDialog.form.groups" placeholder="请选择产线名称">
            <el-option v-for=" item  in  CompanyOptions " :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="产线名称" prop="lineId">
          <el-select v-model="linesDialog.form.lineId" placeholder="请选择产线名称">
            <el-option v-for=" item  in  linesNameOptions " :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="公共业务分摊比例(%)" prop="ratio">
          <el-input-number :min="0" v-model="linesDialog.form.ratio" controls-position="right"
            placeholder="请输入公共业务分摊比例（%）" precision="2"></el-input-number>
        </el-form-item>
        <el-form-item label="费用要素" prop="elementId">
          <el-select v-model="linesDialog.form.elementId" placeholder="请选择产线名称">
            <el-option v-for=" item  in  feeElementOptions " :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="default" @click="onLineCancel(linesDialogFormRef)">取消</el-button>
        <el-button type="primary" @click="onSubmitLine(linesDialogFormRef)" v-loading="linesDialog.loading">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup  name="contract">
import { defineComponent, reactive, toRefs, ref, unref, watch } from 'vue'
import { ElMessage } from 'element-plus';
import { useRoute, useRouter } from 'vue-router'
import { formatTime, number2text, isBlank, findLabel } from '../../utils'
import OtherFile from '../otherFile'
import {
  addContract,
  updateContract,
  addPaymentPlan,
  querySupplierInfos,
  getUnionCode,
  queryPaymentplanByContractNum,
  queryCostDeptByNature,
  addContractSupplierBinding,
  querySupplierInfoByContractNum,
  queryContractDetail,
  querySignCompany,
  queryLine,
  queryFeeElement,
  addAllocationRule,
  queryAllocationRuleByContractNum,

} from '@/api/contract';

import { rules, paymentPlanDialogRules, linesRules } from '../../rules'
import {
  NatureContractOption,
  TypeOptions,
  DocumentStatusOptions,
  ContractTypeOptions,
  PublicServiceOptions,
  ContractMasterSlaveOptions,
  AllocationRulesOptions,
  ContractStatusOption,
  SignModelOptions,
  ContractSideOptions,
  ApplyExampleOptions,
  SignTypelOptions,
  CompanyOptions,
  SettlementOptions,
  TaxRateOptions,
  InvoiceMethodOptions,
  CurrencyOptions,
  ISNeedPaymentOptions,
  PaymentTypeOptions,
  PaymentRatioOptions,
  CounterpartOptions,

} from '../../enum'

defineComponent({
  OtherFile: 'OtherFile',
})
const props = defineProps(['mode'])
const router = useRouter()
const route = useRoute()
const collapse = reactive({
  baseInfoNames: 'baseInfo',
  finanicalInfo: 'finanicalInfo',
  ledgerInfo: 'ledgerInfo',
})
const cascaderProps = reactive({
  emitPath: false
})
const data = reactive({
  spanCol: 6,
  form: {
    unionCode: null,
    id: null,
    number: '',
    oppositeNumber: '',
    classification: 1,
    name: '',
    documentStatus: '',
    signCompanyName: '',
    signCompanyId: null,
    signDeptName: '',
    signDeptId: null,
    signPerson: '',
    type: 1,
    masterSlave: null,
    contractStatus: null,
    template: null,
    version: '',
    signDate: '',
    effectivenessDate: '',
    endDate: '',
    deliverDate: '',
    signWay: null,
    signType: null,
    signAddress: '',
    costDeptName: '',
    costDeptId: null,
    costCompanyName: '',
    costCompanyId: null,
    publicBusiness: null,
    nature: null,
    allocationRule: null,
    insideOutside: null,
    groups: null,
    remark: '',
    totalAmount: null,
    amount: null,
    amountChn: null,
    totalAmountChn: null,
    taxAmount: null,
    taxRate: null,
    currency: '',
    paymentMethod: '',
    billingMethond: '',
    needPay: '',
    yield: null,
    unitPrice: null,
    action: '',
    financeRemark: '',
    signPersonId: null,
    documentNumber: '',
  },
  supplierDataSource: [], // 相对方
  paymentPlan: [], //付款条件
  formRef: undefined,
  tabName: 'paymentPlan',
  supplierDialogtableRef: undefined,
  supplierDialog: {
    visible: false,
    loading: false,
    selectRows: [],
    dataSource: []
  },
  paymentPlanDialogformRef: undefined,
  paymentPlanDialog: {
    visible: false,
    formRef: undefined,
    loading: false,
    form: {
      paymentType: 1,
      paymentRatio: 30,
      paymentTerms: '',
      paymentTime: undefined,
      payable: 0.00,
      remark: '',
    }
  },
  costDeptOptions: [],
  signCompanyoptions: [],
  linesData: [],
  linesNameOptions: [],
  linesDialogFormRef: undefined,
  linesDialog: {
    visible: false,
    loading: false,
    form: {
      lineName: null,
      lineId: null,
      ratio: 0.0,
      elementName: null,
      elementId: null,
      groups: null,
    },
  },
  feeElementData: [],
  feeElementOptions: [],
})
const {
  spanCol,
  form,
  formRef,
  tabName,
  paymentPlanDialogformRef,
  supplierDialog,
  paymentPlanDialog,
  costDeptOptions,
  supplierDialogtableRef,
  supplierDataSource,
  paymentPlan,
  signCompanyoptions,
  linesData,
  linesNameOptions,
  linesDialog,
  feeElementData,
  feeElementOptions,
  linesDialogFormRef,

} = toRefs(data)


const onSubmit = async (formEl) => {
  formEl.validate().then((isValid) => {
    if (isValid) {
      const params = formatFields()
      if (props.mode === 'add') {
        addContract(params).then((res) => {
          if (res) {
            ElMessage.success('新增合同成功')
            router.replace('/contract/list')
          }
        })
      } else {
        updateContract(params).then((res) => {
          if (res) {
            ElMessage.success('更新合同成功')
            router.replace('/contract/list')
          }
        })

      }

    } else {
      ElMessage.error('请完善必填项')
    }
  }).catch(e => {
    ElMessage.error('请完善必填项')
  })
}

const formatFields = () => {
  const params = {
    ...form.value,
    signDate: formatTime(form.value.signDate),
    effectivenessDate: formatTime(form.value.effectivenessDate),
    endDate: formatTime(form.value.endDate),
    deliverDate: !isBlank(form.value.deliverDate) ? formatTime(form.value.deliverDate) : formatTime(new Date().getTime()),
    totalAmount: isBlank(form.value.totalAmount) ? 0.0 : form.value.totalAmount,
    yield: isBlank(form.value.yield) ? 0.0 : form.value.yield,
    amount: isBlank(form.value.amount) ? 0.0 : form.value.amount,
    taxRate: isBlank(form.value.taxRate) ? 0.0 : form.value.taxRate,
    unitPrice: isBlank(form.value.unitPrice) ? 0.0 : form.value.unitPrice,
    taxAmount: isBlank(form.value.taxAmount) ? 0.0 : form.value.taxAmount,
    totalAmount: isBlank(form.value.unitPrice) ? 0.0 : form.value.totalAmount,
    // // mock
    // costCompanyId: 1,
    // costCompanyName: '1',
    // costDeptName: '1',
    // costDeptId: 1,
    // creator: 'creator',
    // creatorPhone: "1212",
    // creationTime: formatTime(new Date().getTime()),
    // modificator: 'sas',
    // modificationTime: formatTime(new Date().getTime()),
    // reviewer: '12',
    // reviewTime: formatTime(new Date().getTime()),
    // signCompanyId: 1,
    // signDeptName: '',
    // unitPrice: 121,

  }
  delete params.supplierDataSource
  delete params.paymentPlan
  try {
    Object.keys(params || {}).forEach(key => {
      if (isBlank(params[key])) {
        delete params[key]
      }
    })
  } catch (error) {
    console.log(error)
  }
  return params
}


const addRow = () => {
  if (tabName.value === 'paymentPlan') {
    resetForm(paymentPlanDialogformRef.value)
    paymentPlanDialog.value.visible = true
  } else if (tabName.value === 'supplier') {
    // 弹窗
    resetForm(supplierDialogtableRef.value)
    supplierDialog.value.visible = true
    supplierDialog.value.selectRows = [...supplierDataSource.value]
    getSupplierInfosDialog()

  } else if (tabName.value === 'lines') {
    resetForm(linesDialogFormRef.value)
    linesDialog.value.loading = false
    linesDialog.value.visible = true
    linesDialog.value.form.groups = form.value.groups
  }
};

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const onSubmitPaymentPlan = async (formEl) => {
  formEl.validate().then((validate) => {
    console.log('validate', validate)
    paymentPlanDialog.value.loading = true
    const params = {
      ...paymentPlanDialog.value.form,
      paymentTime: isBlank(paymentPlanDialog.value.form.paymentTime) ? undefined : formatTime(paymentPlanDialog.value.form.paymentTime),
      contractNumber: form.value.unionCode,
    }
    addPaymentPlan(params).then(res => {
      if (res.code === 200) {
        ElMessage.success('新增成功')
        paymentPlanDialog.value.visible = false
        // 刷新获取
        getPaymentPlanList()
      }
      paymentPlanDialog.value.loading = false
    }).catch(() => {
      paymentPlanDialog.value.loading = false
    })
  })
}
const onSubmitPaymentPlanCancel = () => {
  supplierDialog.value.visible = false
}

const onSupplierSelectClose = () => {
  supplierDialog.value.visible = false
}
const onSupplierSelectOk = () => {
  if (!supplierDialog.value.selectRows.length) {
    ElMessage.error('请选择一条数据')
    return
  }
  const party = supplierDialog.value.selectRows?.[0].party
  if (!party) {
    ElMessage.error('请选择相对方')
    return
  }
  const params = {
    contractNum: form.value.unionCode,
    supplierId: supplierDialog.value.selectRows?.[0].id,
    party: supplierDialog.value.selectRows?.[0].party,
  }
  addContractSupplierBinding(params).then(res => {
    if (res.code === 200) {
      ElMessage.success('新增成功')
      getSupplierInfos()
      supplierDialog.value.visible = false
    }
  })
}

// 查询相对方
const getSupplierInfos = () => {
  const params = {
    // pageNum: 1000,
    // pageSize: 1,
    contractNum: form.value.unionCode
  }
  querySupplierInfoByContractNum(params).then(res => {
    if (res.code === 200) {
      supplierDataSource.value = res.rows || []
    }
  })
}

// 查询弹窗相对方
const getSupplierInfosDialog = async () => {
  const params = {
    pageNum: 1,
    pageSize: 10000,
  }
  supplierDialog.value.loading = true
  querySupplierInfos(params).then(res => {
    if (res.code === 200) {
      supplierDialog.value.dataSource = res.rows
    } else {
      supplierDialog.value.dataSource = []
    }
    supplierDialog.value.loading = false
  }).catch(() => {
    supplierDialog.value.loading = false
    supplierDialog.value.dataSource = [
      {
        id: 0,
        name: '1212',
      },
      {
        id: 2,
        name: '1212',
      },
    ]
  })

}

const onSupplierChange = (selection, row) => {
  if (selection.length > 1) {
    let del_row = selection.shift();
    supplierDialogtableRef.value.toggleRowSelection(del_row, false); // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
  }
  supplierDialog.value.selectRows = [row]
}




// 获取付款条件
const getPaymentPlanList = () => {
  const params = {
    pageSize: 1000,
    pageNum: 1,
    contractNum: form.value.unionCode,
  }
  queryPaymentplanByContractNum(params).then(res => {
    if (res.code === 200) {
      paymentPlan.value = res.rows || []
    }
  })
}

// 获取需求部门
const getCostDeptOptions = (nature) => {
  // queryCostDeptByNature(nature).then(res => {
  //   if (res.code === 200) {
  //     const list = (res.rows || []).map((i) => ({ ...i, label: i.deptName, value: i.id }))
  //     costDeptOptions.value = list
  //   }
  // })

  costDeptOptions.value = [
    {
      label: '1',
      value: 1,
      children: [
        {
          label: '1',
          value: '01'
        },
        {
          label: '1',
          value: '02'
        },
      ]
    },
    {
      label: '2',
      value: 2,
      children: []
    }
  ]
}
// 获取unicode
const initAddUnionCode = () => {
  getUnionCode().then(res => {
    if (res.code) {
      form.value.unionCode = res.data || res.msg
      getPaymentPlanList()
      getSupplierInfos()
    }
  })
}

const initEdit = () => {
  // 获取详情
  const unionCode = route.query.id
  form.value.unionCode = unionCode
  console.log('unionCode', unionCode)
  queryContractDetail(unionCode).then(res => {
    if (res.code === 200) {
      form.value = {
        ...form.value,
        ...res.data
      }

      getCostDeptOptions(res.data.nature)
    }
  })
  getPaymentPlanList()
  getSupplierInfos()
  getLines()
}


const getSignCompany = () => {
  querySignCompany().then((res) => {
    if (res.code === 200) {
      const list = (res.rows || []).map(i => ({ ...i, label: i.company, value: i.id }))
      signCompanyoptions.value = list;
    }
  })
}

const getLines = () => {
  const params = {
    contractNum: form.value.unionCode
  }
  queryAllocationRuleByContractNum(params).then(res => {
    if (res.code === 200) {
      linesData.value = res.rows || []
    }
  })
}

const getLinesOptions = (groups) => {
  const params = {
    companyId: groups
  }
  queryLine(params).then((res) => {
    if (res.code === 200) {
      const list = (res.rows || []).map(i => ({ ...i, label: i.lineName, value: i.id }))
      linesNameOptions.value = list || []
    }
  })
}
const getFeeElement = () => {
  queryFeeElement({}).then((res) => {
    if (res.code === 200) {
      const list = (res.rows || []).map(i => ({ ...i, label: i.element, value: i.id }))
      feeElementOptions.value = list || []
    }
  })
}

const onLineCancel = (formEl) => {
  linesDialog.value.visible = false
}
const onSubmitLine = (formEl) => {
  formEl.validate().then((validate) => {
    console.log('validate', validate)
    if (!validate) {
      return
    }
    linesDialog.value.loading = true
    const params = {
      ...linesDialog.value.form,
      startDate: formatTime(new Date().getTime()),
      contractUnionCode: form.value.unionCode,
      lineName: findLabel(linesNameOptions.value, linesDialog.value.form.lineId),
      elementName: findLabel(feeElementOptions.value, linesDialog.value.form.elementId)
    }
    addAllocationRule(params).then(res => {
      if (res.code === 200) {
        ElMessage.success('新增成功')
        // 刷新获取
        getLines()
        linesDialog.value.visible = false
      }
      paymentPlanDialog.value.loading = false
    }).catch(() => {
      paymentPlanDialog.value.loading = false
    })
  })
}

getSignCompany()
getFeeElement()
getCostDeptOptions(1)

watch(
  () => props.mode,
  (newValue) => {
    if (newValue === 'add') {
      initAddUnionCode()
    } else {
      initEdit()
    }
  },
  {
    immediate: true
  }
)
watch(
  () => form.value.costDeptId,
  (newValue) => {
    console.log('newValue', newValue)
  },
  {
    immediate: true
  }
)

// 自动转化大写
watch(
  () => form.value.totalAmount,
  (newValue) => {
    if (newValue) {
      const v = number2text(newValue, 'upper')
      form.value.totalAmountChn = v
    } else {
      form.value.totalAmountChn = ''
    }
  },
  {
    immediate: true,
    deep: true
  }
)
watch(
  () => form.value.signPersonId,
  (newValue) => {
    if (newValue) {
      const v = findLabel(ContractSideOptions, newValue)
      form.value.signPerson = v
    } else {
      form.value.signPerson = ''
    }
  },
  {
    immediate: true,
    deep: true
  }
)
watch(
  () => linesDialog.value.form.groups,
  (newValue) => {
    if (newValue) {
      getLinesOptions(newValue)
      // 重置下产线名称
      linesData.value.form.lineId = null
      linesData.value.form.lineName = null
    } else {
      linesNameOptions.value = []
    }
  },
  {
    immediate: true,
    deep: true
  }
)
watch(
  () => form.value.costDeptId,
  (newValue) => {
    const name = findLabel(costDeptOptions || [], newValue)
    form.value.costDeptName = name
  },
  {
    immediate: true,
    deep: true
  }
)
watch(
  () => form.value.signCompanyId,
  (newValue) => {
    const name = findLabel(signCompanyoptions || [], newValue)
    form.value.signCompanyName = name
  },
  {
    immediate: true,
    deep: true
  }
)

watch(
  () => form.value.nature,
  (newValue) => {
    if (newValue) {
      getCostDeptOptions(newValue)
    }
  },
  {
    immediate: true,
    deep: true
  }
)


</script>
<style lang="scss" scoped>
@import url('../../index.scss');

:deep {

  .el-select.el-select--medium,
  .el-date-editor.el-input--medium,
  .el-form-item__content .el-input-number {
    flex: 1
  }

  .el-collapse-item__header {
    font-size: 16px;
  }

  .supplier-dialog {
    .el-table__header-wrapper th.el-table__cell:nth-child(1) .cell {
      visibility: hidden;
    }
  }

  .el-input-number .el-input__inner {
    text-align: left;
  }

  .el-dialog {
    .el-select--large {
      flex: 1;
    }
  }
}
</style>