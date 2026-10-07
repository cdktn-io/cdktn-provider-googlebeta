# `googleGeminiGdaObservabilitySettingBinding` Submodule <a name="`googleGeminiGdaObservabilitySettingBinding` Submodule" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGdaObservabilitySettingBinding <a name="GoogleGeminiGdaObservabilitySettingBinding" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding google_gemini_gda_observability_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gda_observability_setting_binding.GoogleGeminiGdaObservabilitySettingBinding;

GoogleGeminiGdaObservabilitySettingBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gdaObservabilitySettingId(java.lang.String)
    .settingBindingId(java.lang.String)
    .target(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .product(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiGdaObservabilitySettingBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.gdaObservabilitySettingId">gdaObservabilitySettingId</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.settingBindingId">settingBindingId</a></code> | <code>java.lang.String</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#id GoogleGeminiGdaObservabilitySettingBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.product">product</a></code> | <code>java.lang.String</code> | Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#project GoogleGeminiGdaObservabilitySettingBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts">GoogleGeminiGdaObservabilitySettingBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gdaObservabilitySettingId`<sup>Required</sup> <a name="gdaObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.gdaObservabilitySettingId"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#gda_observability_setting_id GoogleGeminiGdaObservabilitySettingBinding#gda_observability_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.settingBindingId"></a>

- *Type:* java.lang.String

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#setting_binding_id GoogleGeminiGdaObservabilitySettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#target GoogleGeminiGdaObservabilitySettingBinding#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#deletion_policy GoogleGeminiGdaObservabilitySettingBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#id GoogleGeminiGdaObservabilitySettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#labels GoogleGeminiGdaObservabilitySettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#location GoogleGeminiGdaObservabilitySettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.product"></a>

- *Type:* java.lang.String

Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#product GoogleGeminiGdaObservabilitySettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#project GoogleGeminiGdaObservabilitySettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts">GoogleGeminiGdaObservabilitySettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#timeouts GoogleGeminiGdaObservabilitySettingBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.putTimeouts"></a>

```java
public void putTimeouts(GoogleGeminiGdaObservabilitySettingBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts">GoogleGeminiGdaObservabilitySettingBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProduct` <a name="resetProduct" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetProduct"></a>

```java
public void resetProduct()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGeminiGdaObservabilitySettingBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gda_observability_setting_binding.GoogleGeminiGdaObservabilitySettingBinding;

GoogleGeminiGdaObservabilitySettingBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gda_observability_setting_binding.GoogleGeminiGdaObservabilitySettingBinding;

GoogleGeminiGdaObservabilitySettingBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gda_observability_setting_binding.GoogleGeminiGdaObservabilitySettingBinding;

GoogleGeminiGdaObservabilitySettingBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gda_observability_setting_binding.GoogleGeminiGdaObservabilitySettingBinding;

GoogleGeminiGdaObservabilitySettingBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGeminiGdaObservabilitySettingBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleGeminiGdaObservabilitySettingBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGeminiGdaObservabilitySettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGeminiGdaObservabilitySettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGdaObservabilitySettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference">GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingIdInput">gdaObservabilitySettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.settingBindingIdInput">settingBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts">GoogleGeminiGdaObservabilitySettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingId">gdaObservabilitySettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.settingBindingId">settingBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.timeouts"></a>

```java
public GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference">GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `gdaObservabilitySettingIdInput`<sup>Optional</sup> <a name="gdaObservabilitySettingIdInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingIdInput"></a>

```java
public java.lang.String getGdaObservabilitySettingIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `settingBindingIdInput`<sup>Optional</sup> <a name="settingBindingIdInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.settingBindingIdInput"></a>

```java
public java.lang.String getSettingBindingIdInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.timeoutsInput"></a>

```java
public IResolvable|GoogleGeminiGdaObservabilitySettingBindingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts">GoogleGeminiGdaObservabilitySettingBindingTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `gdaObservabilitySettingId`<sup>Required</sup> <a name="gdaObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingId"></a>

```java
public java.lang.String getGdaObservabilitySettingId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.settingBindingId"></a>

```java
public java.lang.String getSettingBindingId();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGdaObservabilitySettingBindingConfig <a name="GoogleGeminiGdaObservabilitySettingBindingConfig" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gda_observability_setting_binding.GoogleGeminiGdaObservabilitySettingBindingConfig;

GoogleGeminiGdaObservabilitySettingBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gdaObservabilitySettingId(java.lang.String)
    .settingBindingId(java.lang.String)
    .target(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .product(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiGdaObservabilitySettingBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.gdaObservabilitySettingId">gdaObservabilitySettingId</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.settingBindingId">settingBindingId</a></code> | <code>java.lang.String</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.target">target</a></code> | <code>java.lang.String</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#id GoogleGeminiGdaObservabilitySettingBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.product">product</a></code> | <code>java.lang.String</code> | Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#project GoogleGeminiGdaObservabilitySettingBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts">GoogleGeminiGdaObservabilitySettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `gdaObservabilitySettingId`<sup>Required</sup> <a name="gdaObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.gdaObservabilitySettingId"></a>

```java
public java.lang.String getGdaObservabilitySettingId();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#gda_observability_setting_id GoogleGeminiGdaObservabilitySettingBinding#gda_observability_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.settingBindingId"></a>

```java
public java.lang.String getSettingBindingId();
```

- *Type:* java.lang.String

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#setting_binding_id GoogleGeminiGdaObservabilitySettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#target GoogleGeminiGdaObservabilitySettingBinding#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#deletion_policy GoogleGeminiGdaObservabilitySettingBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#id GoogleGeminiGdaObservabilitySettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#labels GoogleGeminiGdaObservabilitySettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#location GoogleGeminiGdaObservabilitySettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#product GoogleGeminiGdaObservabilitySettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#project GoogleGeminiGdaObservabilitySettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingConfig.property.timeouts"></a>

```java
public GoogleGeminiGdaObservabilitySettingBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts">GoogleGeminiGdaObservabilitySettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#timeouts GoogleGeminiGdaObservabilitySettingBinding#timeouts}

---

### GoogleGeminiGdaObservabilitySettingBindingTimeouts <a name="GoogleGeminiGdaObservabilitySettingBindingTimeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gda_observability_setting_binding.GoogleGeminiGdaObservabilitySettingBindingTimeouts;

GoogleGeminiGdaObservabilitySettingBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#create GoogleGeminiGdaObservabilitySettingBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#delete GoogleGeminiGdaObservabilitySettingBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#update GoogleGeminiGdaObservabilitySettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#create GoogleGeminiGdaObservabilitySettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#delete GoogleGeminiGdaObservabilitySettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting_binding#update GoogleGeminiGdaObservabilitySettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference <a name="GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gemini_gda_observability_setting_binding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference;

new GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts">GoogleGeminiGdaObservabilitySettingBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGeminiGdaObservabilitySettingBindingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySettingBinding.GoogleGeminiGdaObservabilitySettingBindingTimeouts">GoogleGeminiGdaObservabilitySettingBindingTimeouts</a>

---



