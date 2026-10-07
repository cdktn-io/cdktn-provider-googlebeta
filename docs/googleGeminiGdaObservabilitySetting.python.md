# `googleGeminiGdaObservabilitySetting` Submodule <a name="`googleGeminiGdaObservabilitySetting` Submodule" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGdaObservabilitySetting <a name="GoogleGeminiGdaObservabilitySetting" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting google_gemini_gda_observability_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gda_observability_setting_id: str,
  location: str,
  conversational_analytics_setting: GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGeminiGdaObservabilitySettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.gdaObservabilitySettingId">gda_observability_setting_id</a></code> | <code>str</code> | Id of the Gda Observability Setting. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.conversationalAnalyticsSetting">conversational_analytics_setting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#id GoogleGeminiGdaObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#project GoogleGeminiGdaObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts">GoogleGeminiGdaObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gda_observability_setting_id`<sup>Required</sup> <a name="gda_observability_setting_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.gdaObservabilitySettingId"></a>

- *Type:* str

Id of the Gda Observability Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#gda_observability_setting_id GoogleGeminiGdaObservabilitySetting#gda_observability_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#location GoogleGeminiGdaObservabilitySetting#location}

---

##### `conversational_analytics_setting`<sup>Optional</sup> <a name="conversational_analytics_setting" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.conversationalAnalyticsSetting"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#conversational_analytics_setting GoogleGeminiGdaObservabilitySetting#conversational_analytics_setting}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#deletion_policy GoogleGeminiGdaObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#id GoogleGeminiGdaObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#labels GoogleGeminiGdaObservabilitySetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#project GoogleGeminiGdaObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts">GoogleGeminiGdaObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#timeouts GoogleGeminiGdaObservabilitySetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putConversationalAnalyticsSetting">put_conversational_analytics_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetConversationalAnalyticsSetting">reset_conversational_analytics_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conversational_analytics_setting` <a name="put_conversational_analytics_setting" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putConversationalAnalyticsSetting"></a>

```python
def put_conversational_analytics_setting(
  feedback_enabled: bool | IResolvable = None,
  logging_enabled: bool | IResolvable = None,
  metrics_enabled: bool | IResolvable = None,
  traces_enabled: bool | IResolvable = None
) -> None
```

###### `feedback_enabled`<sup>Optional</sup> <a name="feedback_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putConversationalAnalyticsSetting.parameter.feedbackEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#feedback_enabled GoogleGeminiGdaObservabilitySetting#feedback_enabled}

---

###### `logging_enabled`<sup>Optional</sup> <a name="logging_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putConversationalAnalyticsSetting.parameter.loggingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#logging_enabled GoogleGeminiGdaObservabilitySetting#logging_enabled}

---

###### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putConversationalAnalyticsSetting.parameter.metricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#metrics_enabled GoogleGeminiGdaObservabilitySetting#metrics_enabled}

---

###### `traces_enabled`<sup>Optional</sup> <a name="traces_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putConversationalAnalyticsSetting.parameter.tracesEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#traces_enabled GoogleGeminiGdaObservabilitySetting#traces_enabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#create GoogleGeminiGdaObservabilitySetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#delete GoogleGeminiGdaObservabilitySetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#update GoogleGeminiGdaObservabilitySetting#update}.

---

##### `reset_conversational_analytics_setting` <a name="reset_conversational_analytics_setting" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetConversationalAnalyticsSetting"></a>

```python
def reset_conversational_analytics_setting() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleGeminiGdaObservabilitySetting resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleGeminiGdaObservabilitySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleGeminiGdaObservabilitySetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleGeminiGdaObservabilitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGdaObservabilitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.conversationalAnalyticsSetting">conversational_analytics_setting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference">GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.conversationalAnalyticsSettingInput">conversational_analytics_setting_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.gdaObservabilitySettingIdInput">gda_observability_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts">GoogleGeminiGdaObservabilitySettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.gdaObservabilitySettingId">gda_observability_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conversational_analytics_setting`<sup>Required</sup> <a name="conversational_analytics_setting" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.conversationalAnalyticsSetting"></a>

```python
conversational_analytics_setting: GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.timeouts"></a>

```python
timeouts: GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference">GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `conversational_analytics_setting_input`<sup>Optional</sup> <a name="conversational_analytics_setting_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.conversationalAnalyticsSettingInput"></a>

```python
conversational_analytics_setting_input: GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gda_observability_setting_id_input`<sup>Optional</sup> <a name="gda_observability_setting_id_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.gdaObservabilitySettingIdInput"></a>

```python
gda_observability_setting_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleGeminiGdaObservabilitySettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts">GoogleGeminiGdaObservabilitySettingTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `gda_observability_setting_id`<sup>Required</sup> <a name="gda_observability_setting_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.gdaObservabilitySettingId"></a>

```python
gda_observability_setting_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGdaObservabilitySettingConfig <a name="GoogleGeminiGdaObservabilitySettingConfig" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gda_observability_setting_id: str,
  location: str,
  conversational_analytics_setting: GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleGeminiGdaObservabilitySettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.gdaObservabilitySettingId">gda_observability_setting_id</a></code> | <code>str</code> | Id of the Gda Observability Setting. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.conversationalAnalyticsSetting">conversational_analytics_setting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#id GoogleGeminiGdaObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#project GoogleGeminiGdaObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts">GoogleGeminiGdaObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gda_observability_setting_id`<sup>Required</sup> <a name="gda_observability_setting_id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.gdaObservabilitySettingId"></a>

```python
gda_observability_setting_id: str
```

- *Type:* str

Id of the Gda Observability Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#gda_observability_setting_id GoogleGeminiGdaObservabilitySetting#gda_observability_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#location GoogleGeminiGdaObservabilitySetting#location}

---

##### `conversational_analytics_setting`<sup>Optional</sup> <a name="conversational_analytics_setting" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.conversationalAnalyticsSetting"></a>

```python
conversational_analytics_setting: GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#conversational_analytics_setting GoogleGeminiGdaObservabilitySetting#conversational_analytics_setting}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#deletion_policy GoogleGeminiGdaObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#id GoogleGeminiGdaObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#labels GoogleGeminiGdaObservabilitySetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#project GoogleGeminiGdaObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConfig.property.timeouts"></a>

```python
timeouts: GoogleGeminiGdaObservabilitySettingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts">GoogleGeminiGdaObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#timeouts GoogleGeminiGdaObservabilitySetting#timeouts}

---

### GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting <a name="GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting(
  feedback_enabled: bool | IResolvable = None,
  logging_enabled: bool | IResolvable = None,
  metrics_enabled: bool | IResolvable = None,
  traces_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled">feedback_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable feedback. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled">logging_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable logging. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable metrics. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled">traces_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable traces. |

---

##### `feedback_enabled`<sup>Optional</sup> <a name="feedback_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled"></a>

```python
feedback_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#feedback_enabled GoogleGeminiGdaObservabilitySetting#feedback_enabled}

---

##### `logging_enabled`<sup>Optional</sup> <a name="logging_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled"></a>

```python
logging_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#logging_enabled GoogleGeminiGdaObservabilitySetting#logging_enabled}

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#metrics_enabled GoogleGeminiGdaObservabilitySetting#metrics_enabled}

---

##### `traces_enabled`<sup>Optional</sup> <a name="traces_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled"></a>

```python
traces_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#traces_enabled GoogleGeminiGdaObservabilitySetting#traces_enabled}

---

### GoogleGeminiGdaObservabilitySettingTimeouts <a name="GoogleGeminiGdaObservabilitySettingTimeouts" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#create GoogleGeminiGdaObservabilitySetting#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#delete GoogleGeminiGdaObservabilitySetting#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#update GoogleGeminiGdaObservabilitySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#create GoogleGeminiGdaObservabilitySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#delete GoogleGeminiGdaObservabilitySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gda_observability_setting#update GoogleGeminiGdaObservabilitySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference <a name="GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled">reset_feedback_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled">reset_logging_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled">reset_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled">reset_traces_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feedback_enabled` <a name="reset_feedback_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled"></a>

```python
def reset_feedback_enabled() -> None
```

##### `reset_logging_enabled` <a name="reset_logging_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled"></a>

```python
def reset_logging_enabled() -> None
```

##### `reset_metrics_enabled` <a name="reset_metrics_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled"></a>

```python
def reset_metrics_enabled() -> None
```

##### `reset_traces_enabled` <a name="reset_traces_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled"></a>

```python
def reset_traces_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput">feedback_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput">logging_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput">metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput">traces_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled">feedback_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled">logging_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled">traces_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feedback_enabled_input`<sup>Optional</sup> <a name="feedback_enabled_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput"></a>

```python
feedback_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logging_enabled_input`<sup>Optional</sup> <a name="logging_enabled_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput"></a>

```python
logging_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metrics_enabled_input`<sup>Optional</sup> <a name="metrics_enabled_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput"></a>

```python
metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `traces_enabled_input`<sup>Optional</sup> <a name="traces_enabled_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput"></a>

```python
traces_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `feedback_enabled`<sup>Required</sup> <a name="feedback_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled"></a>

```python
feedback_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logging_enabled`<sup>Required</sup> <a name="logging_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled"></a>

```python
logging_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `traces_enabled`<sup>Required</sup> <a name="traces_enabled" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled"></a>

```python
traces_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGdaObservabilitySettingConversationalAnalyticsSetting</a>

---


### GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference <a name="GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_gemini_gda_observability_setting

googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts">GoogleGeminiGdaObservabilitySettingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleGeminiGdaObservabilitySettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGeminiGdaObservabilitySetting.GoogleGeminiGdaObservabilitySettingTimeouts">GoogleGeminiGdaObservabilitySettingTimeouts</a>

---



