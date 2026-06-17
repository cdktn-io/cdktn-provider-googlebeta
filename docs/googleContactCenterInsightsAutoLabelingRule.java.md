# `googleContactCenterInsightsAutoLabelingRule` Submodule <a name="`googleContactCenterInsightsAutoLabelingRule` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAutoLabelingRule <a name="GoogleContactCenterInsightsAutoLabelingRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule google_contact_center_insights_auto_labeling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRule;

GoogleContactCenterInsightsAutoLabelingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .autoLabelingRuleId(java.lang.String)
//  .conditions(IResolvable|java.util.List<GoogleContactCenterInsightsAutoLabelingRuleConditions>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labelKey(java.lang.String)
//  .labelKeyType(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleContactCenterInsightsAutoLabelingRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>java.lang.String</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKey">labelKey</a></code> | <code>java.lang.String</code> | The label key. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKeyType">labelKeyType</a></code> | <code>java.lang.String</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#location GoogleContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#active GoogleContactCenterInsightsAutoLabelingRule#active}

---

##### `autoLabelingRuleId`<sup>Optional</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.autoLabelingRuleId"></a>

- *Type:* java.lang.String

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#auto_labeling_rule_id GoogleContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.conditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#conditions GoogleContactCenterInsightsAutoLabelingRule#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#deletion_policy GoogleContactCenterInsightsAutoLabelingRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#description GoogleContactCenterInsightsAutoLabelingRule#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#display_name GoogleContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelKey`<sup>Optional</sup> <a name="labelKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKey"></a>

- *Type:* java.lang.String

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key GoogleContactCenterInsightsAutoLabelingRule#label_key}

---

##### `labelKeyType`<sup>Optional</sup> <a name="labelKeyType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.labelKeyType"></a>

- *Type:* java.lang.String

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key_type GoogleContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#timeouts GoogleContactCenterInsightsAutoLabelingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId">resetAutoLabelingRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKey">resetLabelKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKeyType">resetLabelKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<GoogleContactCenterInsightsAutoLabelingRuleConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleContactCenterInsightsAutoLabelingRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `resetActive` <a name="resetActive" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetActive"></a>

```java
public void resetActive()
```

##### `resetAutoLabelingRuleId` <a name="resetAutoLabelingRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetAutoLabelingRuleId"></a>

```java
public void resetAutoLabelingRuleId()
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetId"></a>

```java
public void resetId()
```

##### `resetLabelKey` <a name="resetLabelKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKey"></a>

```java
public void resetLabelKey()
```

##### `resetLabelKeyType` <a name="resetLabelKeyType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetLabelKeyType"></a>

```java
public void resetLabelKeyType()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRule;

GoogleContactCenterInsightsAutoLabelingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRule;

GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRule;

GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRule;

GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsAutoLabelingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleContactCenterInsightsAutoLabelingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleContactCenterInsightsAutoLabelingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAutoLabelingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList">GoogleContactCenterInsightsAutoLabelingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput">autoLabelingRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyInput">labelKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput">labelKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKey">labelKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyType">labelKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditions"></a>

```java
public GoogleContactCenterInsightsAutoLabelingRuleConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList">GoogleContactCenterInsightsAutoLabelingRuleConditionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeouts"></a>

```java
public GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference">GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.activeInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoLabelingRuleIdInput`<sup>Optional</sup> <a name="autoLabelingRuleIdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleIdInput"></a>

```java
public java.lang.String getAutoLabelingRuleIdInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<GoogleContactCenterInsightsAutoLabelingRuleConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelKeyInput`<sup>Optional</sup> <a name="labelKeyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyInput"></a>

```java
public java.lang.String getLabelKeyInput();
```

- *Type:* java.lang.String

---

##### `labelKeyTypeInput`<sup>Optional</sup> <a name="labelKeyTypeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyTypeInput"></a>

```java
public java.lang.String getLabelKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.timeoutsInput"></a>

```java
public IResolvable|GoogleContactCenterInsightsAutoLabelingRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoLabelingRuleId`<sup>Required</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.autoLabelingRuleId"></a>

```java
public java.lang.String getAutoLabelingRuleId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labelKey`<sup>Required</sup> <a name="labelKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKey"></a>

```java
public java.lang.String getLabelKey();
```

- *Type:* java.lang.String

---

##### `labelKeyType`<sup>Required</sup> <a name="labelKeyType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.labelKeyType"></a>

```java
public java.lang.String getLabelKeyType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAutoLabelingRuleConditions <a name="GoogleContactCenterInsightsAutoLabelingRuleConditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRuleConditions;

GoogleContactCenterInsightsAutoLabelingRuleConditions.builder()
//  .condition(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.condition">condition</a></code> | <code>java.lang.String</code> | A optional CEL expression to be evaluated as a boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.value">value</a></code> | <code>java.lang.String</code> | CEL expression to be evaluated as the value. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

A optional CEL expression to be evaluated as a boolean value.

Once evaluated as true, then we will proceed with the value evaluation.
An empty condition will be auto evaluated as true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#condition GoogleContactCenterInsightsAutoLabelingRule#condition}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

CEL expression to be evaluated as the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#value GoogleContactCenterInsightsAutoLabelingRule#value}

---

### GoogleContactCenterInsightsAutoLabelingRuleConfig <a name="GoogleContactCenterInsightsAutoLabelingRuleConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRuleConfig;

GoogleContactCenterInsightsAutoLabelingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
//  .active(java.lang.Boolean|IResolvable)
//  .autoLabelingRuleId(java.lang.String)
//  .conditions(IResolvable|java.util.List<GoogleContactCenterInsightsAutoLabelingRuleConditions>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labelKey(java.lang.String)
//  .labelKeyType(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleContactCenterInsightsAutoLabelingRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.active">active</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is active. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId">autoLabelingRuleId</a></code> | <code>java.lang.String</code> | A unique ID for the new AutoLabelingRule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display Name of the auto labeling rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKey">labelKey</a></code> | <code>java.lang.String</code> | The label key. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType">labelKeyType</a></code> | <code>java.lang.String</code> | The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#location GoogleContactCenterInsightsAutoLabelingRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.active"></a>

```java
public java.lang.Boolean|IResolvable getActive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#active GoogleContactCenterInsightsAutoLabelingRule#active}

---

##### `autoLabelingRuleId`<sup>Optional</sup> <a name="autoLabelingRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.autoLabelingRuleId"></a>

```java
public java.lang.String getAutoLabelingRuleId();
```

- *Type:* java.lang.String

A unique ID for the new AutoLabelingRule.

This ID will become the final
component of the AutoLabelingRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#auto_labeling_rule_id GoogleContactCenterInsightsAutoLabelingRule#auto_labeling_rule_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.conditions"></a>

```java
public IResolvable|java.util.List<GoogleContactCenterInsightsAutoLabelingRuleConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#conditions GoogleContactCenterInsightsAutoLabelingRule#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#deletion_policy GoogleContactCenterInsightsAutoLabelingRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#description GoogleContactCenterInsightsAutoLabelingRule#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display Name of the auto labeling rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#display_name GoogleContactCenterInsightsAutoLabelingRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#id GoogleContactCenterInsightsAutoLabelingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelKey`<sup>Optional</sup> <a name="labelKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKey"></a>

```java
public java.lang.String getLabelKey();
```

- *Type:* java.lang.String

The label key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key GoogleContactCenterInsightsAutoLabelingRule#label_key}

---

##### `labelKeyType`<sup>Optional</sup> <a name="labelKeyType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.labelKeyType"></a>

```java
public java.lang.String getLabelKeyType();
```

- *Type:* java.lang.String

The type of the label key. Possible values: ["LABEL_KEY_TYPE_UNSPECIFIED", "LABEL_KEY_TYPE_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#label_key_type GoogleContactCenterInsightsAutoLabelingRule#label_key_type}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#project GoogleContactCenterInsightsAutoLabelingRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConfig.property.timeouts"></a>

```java
public GoogleContactCenterInsightsAutoLabelingRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#timeouts GoogleContactCenterInsightsAutoLabelingRule#timeouts}

---

### GoogleContactCenterInsightsAutoLabelingRuleTimeouts <a name="GoogleContactCenterInsightsAutoLabelingRuleTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts;

GoogleContactCenterInsightsAutoLabelingRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#create GoogleContactCenterInsightsAutoLabelingRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#delete GoogleContactCenterInsightsAutoLabelingRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#update GoogleContactCenterInsightsAutoLabelingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#create GoogleContactCenterInsightsAutoLabelingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#delete GoogleContactCenterInsightsAutoLabelingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_auto_labeling_rule#update GoogleContactCenterInsightsAutoLabelingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAutoLabelingRuleConditionsList <a name="GoogleContactCenterInsightsAutoLabelingRuleConditionsList" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList;

new GoogleContactCenterInsightsAutoLabelingRuleConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.get"></a>

```java
public GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleContactCenterInsightsAutoLabelingRuleConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>>

---


### GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference <a name="GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference;

new GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleContactCenterInsightsAutoLabelingRuleConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleConditions">GoogleContactCenterInsightsAutoLabelingRuleConditions</a>

---


### GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_auto_labeling_rule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference;

new GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleContactCenterInsightsAutoLabelingRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAutoLabelingRule.GoogleContactCenterInsightsAutoLabelingRuleTimeouts">GoogleContactCenterInsightsAutoLabelingRuleTimeouts</a>

---



