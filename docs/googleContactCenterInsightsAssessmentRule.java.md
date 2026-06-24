# `googleContactCenterInsightsAssessmentRule` Submodule <a name="`googleContactCenterInsightsAssessmentRule` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAssessmentRule <a name="GoogleContactCenterInsightsAssessmentRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule google_contact_center_insights_assessment_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRule;

GoogleContactCenterInsightsAssessmentRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .assessmentRuleId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .sampleRule(GoogleContactCenterInsightsAssessmentRuleSampleRule)
//  .scheduleInfo(GoogleContactCenterInsightsAssessmentRuleScheduleInfo)
//  .timeouts(GoogleContactCenterInsightsAssessmentRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.assessmentRuleId">assessmentRuleId</a></code> | <code>java.lang.String</code> | A unique ID for the new AssessmentRule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the assessment rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#id GoogleContactCenterInsightsAssessmentRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#project GoogleContactCenterInsightsAssessmentRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.sampleRule">sampleRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | sample_rule block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#location GoogleContactCenterInsightsAssessmentRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#active GoogleContactCenterInsightsAssessmentRule#active}

---

##### `assessmentRuleId`<sup>Optional</sup> <a name="assessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.assessmentRuleId"></a>

- *Type:* java.lang.String

A unique ID for the new AssessmentRule.

This ID will become the final
component of the AssessmentRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#assessment_rule_id GoogleContactCenterInsightsAssessmentRule#assessment_rule_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#deletion_policy GoogleContactCenterInsightsAssessmentRule#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display Name of the assessment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#display_name GoogleContactCenterInsightsAssessmentRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#id GoogleContactCenterInsightsAssessmentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#project GoogleContactCenterInsightsAssessmentRule#project}.

---

##### `sampleRule`<sup>Optional</sup> <a name="sampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.sampleRule"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

sample_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#sample_rule GoogleContactCenterInsightsAssessmentRule#sample_rule}

---

##### `scheduleInfo`<sup>Optional</sup> <a name="scheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.scheduleInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#schedule_info GoogleContactCenterInsightsAssessmentRule#schedule_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#timeouts GoogleContactCenterInsightsAssessmentRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putSampleRule">putSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putScheduleInfo">putScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetAssessmentRuleId">resetAssessmentRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetSampleRule">resetSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetScheduleInfo">resetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSampleRule` <a name="putSampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putSampleRule"></a>

```java
public void putSampleRule(GoogleContactCenterInsightsAssessmentRuleSampleRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putSampleRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `putScheduleInfo` <a name="putScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putScheduleInfo"></a>

```java
public void putScheduleInfo(GoogleContactCenterInsightsAssessmentRuleScheduleInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleContactCenterInsightsAssessmentRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetActive"></a>

```java
public void resetActive()
```

##### `resetAssessmentRuleId` <a name="resetAssessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetAssessmentRuleId"></a>

```java
public void resetAssessmentRuleId()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetSampleRule` <a name="resetSampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetSampleRule"></a>

```java
public void resetSampleRule()
```

##### `resetScheduleInfo` <a name="resetScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetScheduleInfo"></a>

```java
public void resetScheduleInfo()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRule;

GoogleContactCenterInsightsAssessmentRule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRule;

GoogleContactCenterInsightsAssessmentRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRule;

GoogleContactCenterInsightsAssessmentRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRule;

GoogleContactCenterInsightsAssessmentRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleContactCenterInsightsAssessmentRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleContactCenterInsightsAssessmentRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleContactCenterInsightsAssessmentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAssessmentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRule">sampleRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference">GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference">GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput">assessmentRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRuleInput">sampleRuleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfoInput">scheduleInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleId">assessmentRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sampleRule`<sup>Required</sup> <a name="sampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRule"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference getSampleRule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference">GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a>

---

##### `scheduleInfo`<sup>Required</sup> <a name="scheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfo"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference getScheduleInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeouts"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference">GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.activeInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `assessmentRuleIdInput`<sup>Optional</sup> <a name="assessmentRuleIdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput"></a>

```java
public java.lang.String getAssessmentRuleIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sampleRuleInput`<sup>Optional</sup> <a name="sampleRuleInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRuleInput"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleSampleRule getSampleRuleInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `scheduleInfoInput`<sup>Optional</sup> <a name="scheduleInfoInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfoInput"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleScheduleInfo getScheduleInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeoutsInput"></a>

```java
public IResolvable|GoogleContactCenterInsightsAssessmentRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `assessmentRuleId`<sup>Required</sup> <a name="assessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleId"></a>

```java
public java.lang.String getAssessmentRuleId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAssessmentRuleConfig <a name="GoogleContactCenterInsightsAssessmentRuleConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRuleConfig;

GoogleContactCenterInsightsAssessmentRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .assessmentRuleId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .sampleRule(GoogleContactCenterInsightsAssessmentRuleSampleRule)
//  .scheduleInfo(GoogleContactCenterInsightsAssessmentRuleScheduleInfo)
//  .timeouts(GoogleContactCenterInsightsAssessmentRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId">assessmentRuleId</a></code> | <code>java.lang.String</code> | A unique ID for the new AssessmentRule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the assessment rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#id GoogleContactCenterInsightsAssessmentRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#project GoogleContactCenterInsightsAssessmentRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.sampleRule">sampleRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | sample_rule block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo">scheduleInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#location GoogleContactCenterInsightsAssessmentRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#active GoogleContactCenterInsightsAssessmentRule#active}

---

##### `assessmentRuleId`<sup>Optional</sup> <a name="assessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId"></a>

```java
public java.lang.String getAssessmentRuleId();
```

- *Type:* java.lang.String

A unique ID for the new AssessmentRule.

This ID will become the final
component of the AssessmentRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#assessment_rule_id GoogleContactCenterInsightsAssessmentRule#assessment_rule_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#deletion_policy GoogleContactCenterInsightsAssessmentRule#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display Name of the assessment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#display_name GoogleContactCenterInsightsAssessmentRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#id GoogleContactCenterInsightsAssessmentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#project GoogleContactCenterInsightsAssessmentRule#project}.

---

##### `sampleRule`<sup>Optional</sup> <a name="sampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.sampleRule"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleSampleRule getSampleRule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

sample_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#sample_rule GoogleContactCenterInsightsAssessmentRule#sample_rule}

---

##### `scheduleInfo`<sup>Optional</sup> <a name="scheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleScheduleInfo getScheduleInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#schedule_info GoogleContactCenterInsightsAssessmentRule#schedule_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.timeouts"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#timeouts GoogleContactCenterInsightsAssessmentRule#timeouts}

---

### GoogleContactCenterInsightsAssessmentRuleSampleRule <a name="GoogleContactCenterInsightsAssessmentRuleSampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRuleSampleRule;

GoogleContactCenterInsightsAssessmentRuleSampleRule.builder()
//  .conversationFilter(java.lang.String)
//  .dimension(java.lang.String)
//  .samplePercentage(java.lang.Number)
//  .sampleRow(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter">conversationFilter</a></code> | <code>java.lang.String</code> | To specify the filter for the conversions that should apply this sample rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.dimension">dimension</a></code> | <code>java.lang.String</code> | Group by dimension to sample the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage">samplePercentage</a></code> | <code>java.lang.Number</code> | Percentage of conversations that we should sample  based on the dimension between [0, 100]. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow">sampleRow</a></code> | <code>java.lang.Number</code> | Number of the conversations that we should sample based on the dimension. |

---

##### `conversationFilter`<sup>Optional</sup> <a name="conversationFilter" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter"></a>

```java
public java.lang.String getConversationFilter();
```

- *Type:* java.lang.String

To specify the filter for the conversions that should apply this sample rule.

An empty filter means this sample rule applies to all conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#conversation_filter GoogleContactCenterInsightsAssessmentRule#conversation_filter}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.dimension"></a>

```java
public java.lang.String getDimension();
```

- *Type:* java.lang.String

Group by dimension to sample the conversation.

If no dimension is
provided, the sampling will be applied to the project level.
Current supported dimensions is 'quality_metadata.agent_info.agent_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#dimension GoogleContactCenterInsightsAssessmentRule#dimension}

---

##### `samplePercentage`<sup>Optional</sup> <a name="samplePercentage" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage"></a>

```java
public java.lang.Number getSamplePercentage();
```

- *Type:* java.lang.Number

Percentage of conversations that we should sample  based on the dimension between [0, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#sample_percentage GoogleContactCenterInsightsAssessmentRule#sample_percentage}

---

##### `sampleRow`<sup>Optional</sup> <a name="sampleRow" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow"></a>

```java
public java.lang.Number getSampleRow();
```

- *Type:* java.lang.Number

Number of the conversations that we should sample based on the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#sample_row GoogleContactCenterInsightsAssessmentRule#sample_row}

---

### GoogleContactCenterInsightsAssessmentRuleScheduleInfo <a name="GoogleContactCenterInsightsAssessmentRuleScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo;

GoogleContactCenterInsightsAssessmentRuleScheduleInfo.builder()
//  .endTime(java.lang.String)
//  .schedule(java.lang.String)
//  .startTime(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime">endTime</a></code> | <code>java.lang.String</code> | End time of the schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule">schedule</a></code> | <code>java.lang.String</code> | The groc expression. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Start time of the schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The timezone to use for the groc expression. If not specified, defaults to UTC. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

End time of the schedule.

If not specified, will keep scheduling new
pipelines for execution until the schedule is no longer active or deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#end_time GoogleContactCenterInsightsAssessmentRule#end_time}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

The groc expression.

Format: 'every number [synchronized]'
Cron syntax is not supported.
Time units can be: minutes, hours
Synchronized is optional and indicates that the schedule should be
synchronized to the start of the interval: every 5 minutes synchronized
means 00:00, 00:05 ...
Otherwise the start time is random within the interval.
Example: 'every 5 minutes'
could be  00:02, 00:07, 00:12, ...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#schedule GoogleContactCenterInsightsAssessmentRule#schedule}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Start time of the schedule.

If not specified, will start as soon as the
schedule is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#start_time GoogleContactCenterInsightsAssessmentRule#start_time}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The timezone to use for the groc expression. If not specified, defaults to UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#time_zone GoogleContactCenterInsightsAssessmentRule#time_zone}

---

### GoogleContactCenterInsightsAssessmentRuleTimeouts <a name="GoogleContactCenterInsightsAssessmentRuleTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRuleTimeouts;

GoogleContactCenterInsightsAssessmentRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#create GoogleContactCenterInsightsAssessmentRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#delete GoogleContactCenterInsightsAssessmentRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#update GoogleContactCenterInsightsAssessmentRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#create GoogleContactCenterInsightsAssessmentRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#delete GoogleContactCenterInsightsAssessmentRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_contact_center_insights_assessment_rule#update GoogleContactCenterInsightsAssessmentRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference <a name="GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference;

new GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter">resetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage">resetSamplePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow">resetSampleRow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConversationFilter` <a name="resetConversationFilter" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter"></a>

```java
public void resetConversationFilter()
```

##### `resetDimension` <a name="resetDimension" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetSamplePercentage` <a name="resetSamplePercentage" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage"></a>

```java
public void resetSamplePercentage()
```

##### `resetSampleRow` <a name="resetSampleRow" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow"></a>

```java
public void resetSampleRow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput">conversationFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput">samplePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput">sampleRowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter">conversationFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension">dimension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage">samplePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow">sampleRow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conversationFilterInput`<sup>Optional</sup> <a name="conversationFilterInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput"></a>

```java
public java.lang.String getConversationFilterInput();
```

- *Type:* java.lang.String

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput"></a>

```java
public java.lang.String getDimensionInput();
```

- *Type:* java.lang.String

---

##### `samplePercentageInput`<sup>Optional</sup> <a name="samplePercentageInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput"></a>

```java
public java.lang.Number getSamplePercentageInput();
```

- *Type:* java.lang.Number

---

##### `sampleRowInput`<sup>Optional</sup> <a name="sampleRowInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput"></a>

```java
public java.lang.Number getSampleRowInput();
```

- *Type:* java.lang.Number

---

##### `conversationFilter`<sup>Required</sup> <a name="conversationFilter" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter"></a>

```java
public java.lang.String getConversationFilter();
```

- *Type:* java.lang.String

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension"></a>

```java
public java.lang.String getDimension();
```

- *Type:* java.lang.String

---

##### `samplePercentage`<sup>Required</sup> <a name="samplePercentage" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage"></a>

```java
public java.lang.Number getSamplePercentage();
```

- *Type:* java.lang.Number

---

##### `sampleRow`<sup>Required</sup> <a name="sampleRow" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow"></a>

```java
public java.lang.Number getSampleRow();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleSampleRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

---


### GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference <a name="GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference;

new GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsAssessmentRuleScheduleInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

---


### GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_assessment_rule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference;

new GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleContactCenterInsightsAssessmentRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

---



