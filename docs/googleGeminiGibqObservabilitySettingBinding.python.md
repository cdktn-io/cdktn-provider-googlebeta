# `googleGeminiGibqObservabilitySettingBinding` Submodule <a name="`googleGeminiGibqObservabilitySettingBinding` Submodule" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGibqObservabilitySettingBinding <a name="GoogleGeminiGibqObservabilitySettingBinding" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding google_gemini_gibq_observability_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gibq_observability_setting_binding

googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gibq_observability_setting_id: str,
  setting_binding_id: str,
  target: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  product: str = None,
  project: str = None,
  timeouts: GoogleGeminiGibqObservabilitySettingBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.gibqObservabilitySettingId">gibq_observability_setting_id</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.settingBindingId">setting_binding_id</a></code> | <code>str</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.target">target</a></code> | <code>str</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#id GoogleGeminiGibqObservabilitySettingBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.product">product</a></code> | <code>str</code> | Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gibqObservabilitySettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#project GoogleGeminiGibqObservabilitySettingBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts">GoogleGeminiGibqObservabilitySettingBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gibq_observability_setting_id`<sup>Required</sup> <a name="gibq_observability_setting_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.gibqObservabilitySettingId"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#gibq_observability_setting_id GoogleGeminiGibqObservabilitySettingBinding#gibq_observability_setting_id}

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.settingBindingId"></a>

- *Type:* str

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#setting_binding_id GoogleGeminiGibqObservabilitySettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.target"></a>

- *Type:* str

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#target GoogleGeminiGibqObservabilitySettingBinding#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#deletion_policy GoogleGeminiGibqObservabilitySettingBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#id GoogleGeminiGibqObservabilitySettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#labels GoogleGeminiGibqObservabilitySettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#location GoogleGeminiGibqObservabilitySettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.product"></a>

- *Type:* str

Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gibqObservabilitySettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#product GoogleGeminiGibqObservabilitySettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#project GoogleGeminiGibqObservabilitySettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts">GoogleGeminiGibqObservabilitySettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#timeouts GoogleGeminiGibqObservabilitySettingBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetProduct">reset_product</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#create GoogleGeminiGibqObservabilitySettingBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#delete GoogleGeminiGibqObservabilitySettingBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#update GoogleGeminiGibqObservabilitySettingBinding#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_product` <a name="reset_product" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetProduct"></a>

```python
def reset_product() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleGeminiGibqObservabilitySettingBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_gemini_gibq_observability_setting_binding

googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_gemini_gibq_observability_setting_binding

googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_gemini_gibq_observability_setting_binding

googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_gemini_gibq_observability_setting_binding

googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleGeminiGibqObservabilitySettingBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGeminiGibqObservabilitySettingBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGeminiGibqObservabilitySettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGibqObservabilitySettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference">GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingIdInput">gibq_observability_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.settingBindingIdInput">setting_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts">GoogleGeminiGibqObservabilitySettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingId">gibq_observability_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.settingBindingId">setting_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.timeouts"></a>

```python
timeouts: GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference">GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gibq_observability_setting_id_input`<sup>Optional</sup> <a name="gibq_observability_setting_id_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingIdInput"></a>

```python
gibq_observability_setting_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `setting_binding_id_input`<sup>Optional</sup> <a name="setting_binding_id_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.settingBindingIdInput"></a>

```python
setting_binding_id_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleGeminiGibqObservabilitySettingBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts">GoogleGeminiGibqObservabilitySettingBindingTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `gibq_observability_setting_id`<sup>Required</sup> <a name="gibq_observability_setting_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.gibqObservabilitySettingId"></a>

```python
gibq_observability_setting_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.settingBindingId"></a>

```python
setting_binding_id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGibqObservabilitySettingBindingConfig <a name="GoogleGeminiGibqObservabilitySettingBindingConfig" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gibq_observability_setting_binding

googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gibq_observability_setting_id: str,
  setting_binding_id: str,
  target: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  product: str = None,
  project: str = None,
  timeouts: GoogleGeminiGibqObservabilitySettingBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.gibqObservabilitySettingId">gibq_observability_setting_id</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.settingBindingId">setting_binding_id</a></code> | <code>str</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.target">target</a></code> | <code>str</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#id GoogleGeminiGibqObservabilitySettingBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.product">product</a></code> | <code>str</code> | Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gibqObservabilitySettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#project GoogleGeminiGibqObservabilitySettingBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts">GoogleGeminiGibqObservabilitySettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gibq_observability_setting_id`<sup>Required</sup> <a name="gibq_observability_setting_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.gibqObservabilitySettingId"></a>

```python
gibq_observability_setting_id: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#gibq_observability_setting_id GoogleGeminiGibqObservabilitySettingBinding#gibq_observability_setting_id}

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.settingBindingId"></a>

```python
setting_binding_id: str
```

- *Type:* str

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#setting_binding_id GoogleGeminiGibqObservabilitySettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#target GoogleGeminiGibqObservabilitySettingBinding#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#deletion_policy GoogleGeminiGibqObservabilitySettingBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#id GoogleGeminiGibqObservabilitySettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#labels GoogleGeminiGibqObservabilitySettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#location GoogleGeminiGibqObservabilitySettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.product"></a>

```python
product: str
```

- *Type:* str

Product type of the setting binding. Values include GEMINI_IN_BIGQUERY, GEMINI_CLOUD_ASSIST, etc. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gibqObservabilitySettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#product GoogleGeminiGibqObservabilitySettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#project GoogleGeminiGibqObservabilitySettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingConfig.property.timeouts"></a>

```python
timeouts: GoogleGeminiGibqObservabilitySettingBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts">GoogleGeminiGibqObservabilitySettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#timeouts GoogleGeminiGibqObservabilitySettingBinding#timeouts}

---

### GoogleGeminiGibqObservabilitySettingBindingTimeouts <a name="GoogleGeminiGibqObservabilitySettingBindingTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gibq_observability_setting_binding

googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#create GoogleGeminiGibqObservabilitySettingBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#delete GoogleGeminiGibqObservabilitySettingBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#update GoogleGeminiGibqObservabilitySettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#create GoogleGeminiGibqObservabilitySettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#delete GoogleGeminiGibqObservabilitySettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting_binding#update GoogleGeminiGibqObservabilitySettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference <a name="GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gibq_observability_setting_binding

googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts">GoogleGeminiGibqObservabilitySettingBindingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleGeminiGibqObservabilitySettingBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySettingBinding.GoogleGeminiGibqObservabilitySettingBindingTimeouts">GoogleGeminiGibqObservabilitySettingBindingTimeouts</a>

---



