# `googleGeminiGibqObservabilitySetting` Submodule <a name="`googleGeminiGibqObservabilitySetting` Submodule" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGibqObservabilitySetting <a name="GoogleGeminiGibqObservabilitySetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting google_gemini_gibq_observability_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySetting;

GoogleGeminiGibqObservabilitySetting.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gibqObservabilitySettingId(java.lang.String)
//  .conversationalAnalyticsSetting(GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiGibqObservabilitySettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.gibqObservabilitySettingId">gibqObservabilitySettingId</a></code> | <code>java.lang.String</code> | Id of the requesting object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.conversationalAnalyticsSetting">conversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#id GoogleGeminiGibqObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#project GoogleGeminiGibqObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gibqObservabilitySettingId`<sup>Required</sup> <a name="gibqObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.gibqObservabilitySettingId"></a>

- *Type:* java.lang.String

Id of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#gibq_observability_setting_id GoogleGeminiGibqObservabilitySetting#gibq_observability_setting_id}

---

##### `conversationalAnalyticsSetting`<sup>Optional</sup> <a name="conversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.conversationalAnalyticsSetting"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#conversational_analytics_setting GoogleGeminiGibqObservabilitySetting#conversational_analytics_setting}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#deletion_policy GoogleGeminiGibqObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#id GoogleGeminiGibqObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#labels GoogleGeminiGibqObservabilitySetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#location GoogleGeminiGibqObservabilitySetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#project GoogleGeminiGibqObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#timeouts GoogleGeminiGibqObservabilitySetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putConversationalAnalyticsSetting">putConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting">resetConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConversationalAnalyticsSetting` <a name="putConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putConversationalAnalyticsSetting"></a>

```java
public void putConversationalAnalyticsSetting(GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putTimeouts"></a>

```java
public void putTimeouts(GoogleGeminiGibqObservabilitySettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

---

##### `resetConversationalAnalyticsSetting` <a name="resetConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting"></a>

```java
public void resetConversationalAnalyticsSetting()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySetting;

GoogleGeminiGibqObservabilitySetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySetting;

GoogleGeminiGibqObservabilitySetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySetting;

GoogleGeminiGibqObservabilitySetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySetting;

GoogleGeminiGibqObservabilitySetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGeminiGibqObservabilitySetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleGeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGeminiGibqObservabilitySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGeminiGibqObservabilitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGibqObservabilitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting">conversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference">GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput">conversationalAnalyticsSettingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput">gibqObservabilitySettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingId">gibqObservabilitySettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conversationalAnalyticsSetting`<sup>Required</sup> <a name="conversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting"></a>

```java
public GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference getConversationalAnalyticsSetting();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeouts"></a>

```java
public GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference">GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `conversationalAnalyticsSettingInput`<sup>Optional</sup> <a name="conversationalAnalyticsSettingInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput"></a>

```java
public GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting getConversationalAnalyticsSettingInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `gibqObservabilitySettingIdInput`<sup>Optional</sup> <a name="gibqObservabilitySettingIdInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput"></a>

```java
public java.lang.String getGibqObservabilitySettingIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeoutsInput"></a>

```java
public IResolvable|GoogleGeminiGibqObservabilitySettingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `gibqObservabilitySettingId`<sup>Required</sup> <a name="gibqObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingId"></a>

```java
public java.lang.String getGibqObservabilitySettingId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGibqObservabilitySettingConfig <a name="GoogleGeminiGibqObservabilitySettingConfig" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySettingConfig;

GoogleGeminiGibqObservabilitySettingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gibqObservabilitySettingId(java.lang.String)
//  .conversationalAnalyticsSetting(GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiGibqObservabilitySettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId">gibqObservabilitySettingId</a></code> | <code>java.lang.String</code> | Id of the requesting object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting">conversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#id GoogleGeminiGibqObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#project GoogleGeminiGibqObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gibqObservabilitySettingId`<sup>Required</sup> <a name="gibqObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId"></a>

```java
public java.lang.String getGibqObservabilitySettingId();
```

- *Type:* java.lang.String

Id of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#gibq_observability_setting_id GoogleGeminiGibqObservabilitySetting#gibq_observability_setting_id}

---

##### `conversationalAnalyticsSetting`<sup>Optional</sup> <a name="conversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting"></a>

```java
public GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting getConversationalAnalyticsSetting();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#conversational_analytics_setting GoogleGeminiGibqObservabilitySetting#conversational_analytics_setting}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#deletion_policy GoogleGeminiGibqObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#id GoogleGeminiGibqObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#labels GoogleGeminiGibqObservabilitySetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#location GoogleGeminiGibqObservabilitySetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#project GoogleGeminiGibqObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.timeouts"></a>

```java
public GoogleGeminiGibqObservabilitySettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#timeouts GoogleGeminiGibqObservabilitySetting#timeouts}

---

### GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting <a name="GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting;

GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.builder()
//  .feedbackEnabled(java.lang.Boolean|IResolvable)
//  .loggingEnabled(java.lang.Boolean|IResolvable)
//  .metricsEnabled(java.lang.Boolean|IResolvable)
//  .tracesEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled">feedbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable feedback. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled">loggingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable logging. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable metrics. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled">tracesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable traces. |

---

##### `feedbackEnabled`<sup>Optional</sup> <a name="feedbackEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFeedbackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#feedback_enabled GoogleGeminiGibqObservabilitySetting#feedback_enabled}

---

##### `loggingEnabled`<sup>Optional</sup> <a name="loggingEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLoggingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#logging_enabled GoogleGeminiGibqObservabilitySetting#logging_enabled}

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#metrics_enabled GoogleGeminiGibqObservabilitySetting#metrics_enabled}

---

##### `tracesEnabled`<sup>Optional</sup> <a name="tracesEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTracesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#traces_enabled GoogleGeminiGibqObservabilitySetting#traces_enabled}

---

### GoogleGeminiGibqObservabilitySettingTimeouts <a name="GoogleGeminiGibqObservabilitySettingTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySettingTimeouts;

GoogleGeminiGibqObservabilitySettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#create GoogleGeminiGibqObservabilitySetting#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#delete GoogleGeminiGibqObservabilitySetting#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#update GoogleGeminiGibqObservabilitySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#create GoogleGeminiGibqObservabilitySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#delete GoogleGeminiGibqObservabilitySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#update GoogleGeminiGibqObservabilitySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference <a name="GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference;

new GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled">resetFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled">resetLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled">resetTracesEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeedbackEnabled` <a name="resetFeedbackEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled"></a>

```java
public void resetFeedbackEnabled()
```

##### `resetLoggingEnabled` <a name="resetLoggingEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled"></a>

```java
public void resetLoggingEnabled()
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled"></a>

```java
public void resetMetricsEnabled()
```

##### `resetTracesEnabled` <a name="resetTracesEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled"></a>

```java
public void resetTracesEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput">feedbackEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput">loggingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput">tracesEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled">feedbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled">loggingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled">tracesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `feedbackEnabledInput`<sup>Optional</sup> <a name="feedbackEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getFeedbackEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loggingEnabledInput`<sup>Optional</sup> <a name="loggingEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getLoggingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getMetricsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tracesEnabledInput`<sup>Optional</sup> <a name="tracesEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTracesEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `feedbackEnabled`<sup>Required</sup> <a name="feedbackEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFeedbackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loggingEnabled`<sup>Required</sup> <a name="loggingEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getLoggingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getMetricsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tracesEnabled`<sup>Required</sup> <a name="tracesEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTracesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue"></a>

```java
public GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---


### GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference <a name="GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gibq_observability_setting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference;

new GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGeminiGibqObservabilitySettingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

---



