# `googleVertexAiCustomJob` Submodule <a name="`googleVertexAiCustomJob` Submodule" id="@cdktn/provider-google-beta.googleVertexAiCustomJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiCustomJob <a name="GoogleVertexAiCustomJob" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job google_vertex_ai_custom_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  job_spec: GoogleVertexAiCustomJobJobSpec,
  region: str,
  deletion_policy: str = None,
  encryption_spec: GoogleVertexAiCustomJobEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleVertexAiCustomJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the CustomJob. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.jobSpec">job_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.region">region</a></code> | <code>str</code> | The Google Cloud region to run the custom job in. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#id GoogleVertexAiCustomJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize CustomJobs. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#project GoogleVertexAiCustomJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the CustomJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#display_name GoogleVertexAiCustomJob#display_name}

---

##### `job_spec`<sup>Required</sup> <a name="job_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.jobSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#job_spec GoogleVertexAiCustomJob#job_spec}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.region"></a>

- *Type:* str

The Google Cloud region to run the custom job in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#region GoogleVertexAiCustomJob#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#deletion_policy GoogleVertexAiCustomJob#deletion_policy}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#encryption_spec GoogleVertexAiCustomJob#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#id GoogleVertexAiCustomJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize CustomJobs.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed.
See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#labels GoogleVertexAiCustomJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#project GoogleVertexAiCustomJob#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeouts GoogleVertexAiCustomJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec">put_job_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#kms_key_name GoogleVertexAiCustomJob#kms_key_name}

---

##### `put_job_spec` <a name="put_job_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec"></a>

```python
def put_job_spec(
  worker_pool_specs: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs],
  base_output_directory: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory = None,
  enable_dashboard_access: bool | IResolvable = None,
  enable_web_access: bool | IResolvable = None,
  network: str = None,
  psc_interface_config: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig = None,
  reserved_ip_ranges: typing.List[str] = None,
  scheduling: GoogleVertexAiCustomJobJobSpecScheduling = None,
  service_account: str = None,
  tensorboard: str = None
) -> None
```

###### `worker_pool_specs`<sup>Required</sup> <a name="worker_pool_specs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.workerPoolSpecs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>]

worker_pool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#worker_pool_specs GoogleVertexAiCustomJob#worker_pool_specs}

---

###### `base_output_directory`<sup>Optional</sup> <a name="base_output_directory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.baseOutputDirectory"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

base_output_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#base_output_directory GoogleVertexAiCustomJob#base_output_directory}

---

###### `enable_dashboard_access`<sup>Optional</sup> <a name="enable_dashboard_access" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.enableDashboardAccess"></a>

- *Type:* bool | cdktn.IResolvable

Whether you want Vertex AI to enable access to the customized dashboard in training chief container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_dashboard_access GoogleVertexAiCustomJob#enable_dashboard_access}

---

###### `enable_web_access`<sup>Optional</sup> <a name="enable_web_access" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.enableWebAccess"></a>

- *Type:* bool | cdktn.IResolvable

Whether you want Vertex AI to enable interactive shell access to training containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_web_access GoogleVertexAiCustomJob#enable_web_access}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.network"></a>

- *Type:* str

The full name of the Compute Engine network to which the Job should be peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network GoogleVertexAiCustomJob#network}

---

###### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.pscInterfaceConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#psc_interface_config GoogleVertexAiCustomJob#psc_interface_config}

---

###### `reserved_ip_ranges`<sup>Optional</sup> <a name="reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.reservedIpRanges"></a>

- *Type:* typing.List[str]

A list of names for the reserved ip ranges under the VPC network that can be used for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reserved_ip_ranges GoogleVertexAiCustomJob#reserved_ip_ranges}

---

###### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.scheduling"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#scheduling GoogleVertexAiCustomJob#scheduling}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.serviceAccount"></a>

- *Type:* str

Specifies the service account for workload run-as account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#service_account GoogleVertexAiCustomJob#service_account}

---

###### `tensorboard`<sup>Optional</sup> <a name="tensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putJobSpec.parameter.tensorboard"></a>

- *Type:* str

The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tensorboard GoogleVertexAiCustomJob#tensorboard}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#create GoogleVertexAiCustomJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#delete GoogleVertexAiCustomJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#update GoogleVertexAiCustomJob#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiCustomJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiCustomJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiCustomJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiCustomJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiCustomJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference">GoogleVertexAiCustomJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList">GoogleVertexAiCustomJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpec">job_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference">GoogleVertexAiCustomJobJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference">GoogleVertexAiCustomJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.webAccessUris">web_access_uris</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpecInput">job_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiCustomJobEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference">GoogleVertexAiCustomJobEncryptionSpecOutputReference</a>

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.error"></a>

```python
error: GoogleVertexAiCustomJobErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList">GoogleVertexAiCustomJobErrorList</a>

---

##### `job_spec`<sup>Required</sup> <a name="job_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpec"></a>

```python
job_spec: GoogleVertexAiCustomJobJobSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference">GoogleVertexAiCustomJobJobSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeouts"></a>

```python
timeouts: GoogleVertexAiCustomJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference">GoogleVertexAiCustomJobTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `web_access_uris`<sup>Required</sup> <a name="web_access_uris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.webAccessUris"></a>

```python
web_access_uris: StringMap
```

- *Type:* cdktn.StringMap

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiCustomJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_spec_input`<sup>Optional</sup> <a name="job_spec_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.jobSpecInput"></a>

```python
job_spec_input: GoogleVertexAiCustomJobJobSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiCustomJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiCustomJobConfig <a name="GoogleVertexAiCustomJobConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  job_spec: GoogleVertexAiCustomJobJobSpec,
  region: str,
  deletion_policy: str = None,
  encryption_spec: GoogleVertexAiCustomJobEncryptionSpec = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleVertexAiCustomJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the CustomJob. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.jobSpec">job_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.region">region</a></code> | <code>str</code> | The Google Cloud region to run the custom job in. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#id GoogleVertexAiCustomJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize CustomJobs. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#project GoogleVertexAiCustomJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the CustomJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#display_name GoogleVertexAiCustomJob#display_name}

---

##### `job_spec`<sup>Required</sup> <a name="job_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.jobSpec"></a>

```python
job_spec: GoogleVertexAiCustomJobJobSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#job_spec GoogleVertexAiCustomJob#job_spec}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Google Cloud region to run the custom job in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#region GoogleVertexAiCustomJob#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#deletion_policy GoogleVertexAiCustomJob#deletion_policy}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiCustomJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#encryption_spec GoogleVertexAiCustomJob#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#id GoogleVertexAiCustomJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize CustomJobs.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed.
See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#labels GoogleVertexAiCustomJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#project GoogleVertexAiCustomJob#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiCustomJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeouts GoogleVertexAiCustomJob#timeouts}

---

### GoogleVertexAiCustomJobEncryptionSpec <a name="GoogleVertexAiCustomJobEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#kms_key_name GoogleVertexAiCustomJob#kms_key_name}

---

### GoogleVertexAiCustomJobError <a name="GoogleVertexAiCustomJobError" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobError()
```


### GoogleVertexAiCustomJobJobSpec <a name="GoogleVertexAiCustomJobJobSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec(
  worker_pool_specs: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs],
  base_output_directory: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory = None,
  enable_dashboard_access: bool | IResolvable = None,
  enable_web_access: bool | IResolvable = None,
  network: str = None,
  psc_interface_config: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig = None,
  reserved_ip_ranges: typing.List[str] = None,
  scheduling: GoogleVertexAiCustomJobJobSpecScheduling = None,
  service_account: str = None,
  tensorboard: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.workerPoolSpecs">worker_pool_specs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>]</code> | worker_pool_specs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.baseOutputDirectory">base_output_directory</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | base_output_directory block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableDashboardAccess">enable_dashboard_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether you want Vertex AI to enable access to the customized dashboard in training chief container. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableWebAccess">enable_web_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether you want Vertex AI to enable interactive shell access to training containers. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.network">network</a></code> | <code>str</code> | The full name of the Compute Engine network to which the Job should be peered. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.reservedIpRanges">reserved_ip_ranges</a></code> | <code>typing.List[str]</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this job. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.serviceAccount">service_account</a></code> | <code>str</code> | Specifies the service account for workload run-as account. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.tensorboard">tensorboard</a></code> | <code>str</code> | The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs. |

---

##### `worker_pool_specs`<sup>Required</sup> <a name="worker_pool_specs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.workerPoolSpecs"></a>

```python
worker_pool_specs: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>]

worker_pool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#worker_pool_specs GoogleVertexAiCustomJob#worker_pool_specs}

---

##### `base_output_directory`<sup>Optional</sup> <a name="base_output_directory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.baseOutputDirectory"></a>

```python
base_output_directory: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

base_output_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#base_output_directory GoogleVertexAiCustomJob#base_output_directory}

---

##### `enable_dashboard_access`<sup>Optional</sup> <a name="enable_dashboard_access" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableDashboardAccess"></a>

```python
enable_dashboard_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether you want Vertex AI to enable access to the customized dashboard in training chief container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_dashboard_access GoogleVertexAiCustomJob#enable_dashboard_access}

---

##### `enable_web_access`<sup>Optional</sup> <a name="enable_web_access" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.enableWebAccess"></a>

```python
enable_web_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether you want Vertex AI to enable interactive shell access to training containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#enable_web_access GoogleVertexAiCustomJob#enable_web_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.network"></a>

```python
network: str
```

- *Type:* str

The full name of the Compute Engine network to which the Job should be peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network GoogleVertexAiCustomJob#network}

---

##### `psc_interface_config`<sup>Optional</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#psc_interface_config GoogleVertexAiCustomJob#psc_interface_config}

---

##### `reserved_ip_ranges`<sup>Optional</sup> <a name="reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.reservedIpRanges"></a>

```python
reserved_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

A list of names for the reserved ip ranges under the VPC network that can be used for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reserved_ip_ranges GoogleVertexAiCustomJob#reserved_ip_ranges}

---

##### `scheduling`<sup>Optional</sup> <a name="scheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.scheduling"></a>

```python
scheduling: GoogleVertexAiCustomJobJobSpecScheduling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#scheduling GoogleVertexAiCustomJob#scheduling}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Specifies the service account for workload run-as account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#service_account GoogleVertexAiCustomJob#service_account}

---

##### `tensorboard`<sup>Optional</sup> <a name="tensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec.property.tensorboard"></a>

```python
tensorboard: str
```

- *Type:* str

The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tensorboard GoogleVertexAiCustomJob#tensorboard}

---

### GoogleVertexAiCustomJobJobSpecBaseOutputDirectory <a name="GoogleVertexAiCustomJobJobSpecBaseOutputDirectory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory(
  output_uri_prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix">output_uri_prefix</a></code> | <code>str</code> | Cloud Storage folder URL to store the output. |

---

##### `output_uri_prefix`<sup>Required</sup> <a name="output_uri_prefix" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix"></a>

```python
output_uri_prefix: str
```

- *Type:* str

Cloud Storage folder URL to store the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#output_uri_prefix GoogleVertexAiCustomJob#output_uri_prefix}

---

### GoogleVertexAiCustomJobJobSpecPscInterfaceConfig <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig(
  dns_peering_configs: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs] = None,
  network_attachment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs">dns_peering_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | The name of the attachment to connect to. |

---

##### `dns_peering_configs`<sup>Optional</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```python
dns_peering_configs: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#dns_peering_configs GoogleVertexAiCustomJob#dns_peering_configs}

---

##### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

The name of the attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network_attachment GoogleVertexAiCustomJob#network_attachment}

---

### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs(
  domain: str,
  target_network: str,
  target_project: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain">domain</a></code> | <code>str</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">target_network</a></code> | <code>str</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject">target_project</a></code> | <code>str</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```python
domain: str
```

- *Type:* str

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#domain GoogleVertexAiCustomJob#domain}

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#target_network GoogleVertexAiCustomJob#target_network}

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#target_project GoogleVertexAiCustomJob#target_project}

---

### GoogleVertexAiCustomJobJobSpecScheduling <a name="GoogleVertexAiCustomJobJobSpecScheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling(
  disable_retries: bool | IResolvable = None,
  max_wait_duration: str = None,
  restart_job_on_worker_restart: bool | IResolvable = None,
  strategy: str = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.disableRetries">disable_retries</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the job should retry for internal errors after the job starts running. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.maxWaitDuration">max_wait_duration</a></code> | <code>str</code> | The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart">restart_job_on_worker_restart</a></code> | <code>bool \| cdktn.IResolvable</code> | Restarts the entire CustomJob if a worker gets restarted. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.strategy">strategy</a></code> | <code>str</code> | This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.timeout">timeout</a></code> | <code>str</code> | The maximum job running time. |

---

##### `disable_retries`<sup>Optional</sup> <a name="disable_retries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.disableRetries"></a>

```python
disable_retries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the job should retry for internal errors after the job starts running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#disable_retries GoogleVertexAiCustomJob#disable_retries}

---

##### `max_wait_duration`<sup>Optional</sup> <a name="max_wait_duration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.maxWaitDuration"></a>

```python
max_wait_duration: str
```

- *Type:* str

The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#max_wait_duration GoogleVertexAiCustomJob#max_wait_duration}

---

##### `restart_job_on_worker_restart`<sup>Optional</sup> <a name="restart_job_on_worker_restart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart"></a>

```python
restart_job_on_worker_restart: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Restarts the entire CustomJob if a worker gets restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#restart_job_on_worker_restart GoogleVertexAiCustomJob#restart_job_on_worker_restart}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#strategy GoogleVertexAiCustomJob#strategy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

The maximum job running time.

The default is 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeout GoogleVertexAiCustomJob#timeout}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs(
  container_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec = None,
  disk_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec = None,
  lustre_mounts: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts] = None,
  machine_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec = None,
  nfs_mounts: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts] = None,
  python_package_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec = None,
  replica_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec">disk_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts">lustre_mounts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>]</code> | lustre_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts">nfs_mounts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>]</code> | nfs_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec">python_package_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | python_package_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | The number of worker replicas to use for this worker pool. |

---

##### `container_spec`<sup>Optional</sup> <a name="container_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec"></a>

```python
container_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#container_spec GoogleVertexAiCustomJob#container_spec}

---

##### `disk_spec`<sup>Optional</sup> <a name="disk_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec"></a>

```python
disk_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#disk_spec GoogleVertexAiCustomJob#disk_spec}

---

##### `lustre_mounts`<sup>Optional</sup> <a name="lustre_mounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts"></a>

```python
lustre_mounts: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>]

lustre_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#lustre_mounts GoogleVertexAiCustomJob#lustre_mounts}

---

##### `machine_spec`<sup>Optional</sup> <a name="machine_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec"></a>

```python
machine_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#machine_spec GoogleVertexAiCustomJob#machine_spec}

---

##### `nfs_mounts`<sup>Optional</sup> <a name="nfs_mounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts"></a>

```python
nfs_mounts: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>]

nfs_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#nfs_mounts GoogleVertexAiCustomJob#nfs_mounts}

---

##### `python_package_spec`<sup>Optional</sup> <a name="python_package_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec"></a>

```python
python_package_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

python_package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#python_package_spec GoogleVertexAiCustomJob#python_package_spec}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of worker replicas to use for this worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#replica_count GoogleVertexAiCustomJob#replica_count}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec(
  image_uri: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri">image_uri</a></code> | <code>str</code> | The URI of a container image in the Container Registry that is to be run on each worker replica. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args">args</a></code> | <code>typing.List[str]</code> | The arguments to be passed when starting the container. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command">command</a></code> | <code>typing.List[str]</code> | The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env">env</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>]</code> | env block. |

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

The URI of a container image in the Container Registry that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#image_uri GoogleVertexAiCustomJob#image_uri}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

The arguments to be passed when starting the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#command GoogleVertexAiCustomJob#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env"></a>

```python
env: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name">name</a></code> | <code>str</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value">value</a></code> | <code>str</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#name GoogleVertexAiCustomJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#value GoogleVertexAiCustomJob#value}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec(
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | Type of the disk. |

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_size_gb GoogleVertexAiCustomJob#boot_disk_size_gb}

---

##### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

Type of the disk.

The default value depends on the machine type. Valid values include: "pd-ssd", "pd-standard", "pd-balanced", and "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_type GoogleVertexAiCustomJob#boot_disk_type}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts(
  filesystem: str,
  instance_ip: str,
  mount_point: str,
  volume_handle: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem">filesystem</a></code> | <code>str</code> | The name of the Lustre filesystem. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp">instance_ip</a></code> | <code>str</code> | IP address of the Lustre instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint">mount_point</a></code> | <code>str</code> | Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle">volume_handle</a></code> | <code>str</code> | The unique identifier of the Lustre volume. |

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem"></a>

```python
filesystem: str
```

- *Type:* str

The name of the Lustre filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#filesystem GoogleVertexAiCustomJob#filesystem}

---

##### `instance_ip`<sup>Required</sup> <a name="instance_ip" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp"></a>

```python
instance_ip: str
```

- *Type:* str

IP address of the Lustre instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#instance_ip GoogleVertexAiCustomJob#instance_ip}

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#mount_point GoogleVertexAiCustomJob#mount_point}

---

##### `volume_handle`<sup>Required</sup> <a name="volume_handle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle"></a>

```python
volume_handle: str
```

- *Type:* str

The unique identifier of the Lustre volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#volume_handle GoogleVertexAiCustomJob#volume_handle}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None,
  reservation_affinity: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity = None,
  tpu_topology: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | The type of accelerator(s) that may be attached to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType">machine_type</a></code> | <code>str</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology">tpu_topology</a></code> | <code>str</code> | The topology of the TPUs. |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_count GoogleVertexAiCustomJob#accelerator_count}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

The type of accelerator(s) that may be attached to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_type GoogleVertexAiCustomJob#accelerator_type}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The type of the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#machine_type GoogleVertexAiCustomJob#machine_type}

---

##### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity GoogleVertexAiCustomJob#reservation_affinity}

---

##### `tpu_topology`<sup>Optional</sup> <a name="tpu_topology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology"></a>

```python
tpu_topology: str
```

- *Type:* str

The topology of the TPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tpu_topology GoogleVertexAiCustomJob#tpu_topology}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity(
  reservation_affinity_type: str,
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType">reservation_affinity_type</a></code> | <code>str</code> | Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key">key</a></code> | <code>str</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values">values</a></code> | <code>typing.List[str]</code> | Corresponds to the label values of a reservation resource. |

---

##### `reservation_affinity_type`<sup>Required</sup> <a name="reservation_affinity_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```python
reservation_affinity_type: str
```

- *Type:* str

Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity_type GoogleVertexAiCustomJob#reservation_affinity_type}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key"></a>

```python
key: str
```

- *Type:* str

Corresponds to the label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#key GoogleVertexAiCustomJob#key}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#values GoogleVertexAiCustomJob#values}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts(
  mount_point: str,
  path: str,
  server: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint">mount_point</a></code> | <code>str</code> | Destination mount path. The path must be absolute. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path">path</a></code> | <code>str</code> | Source path exported from NFS database. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server">server</a></code> | <code>str</code> | IP address of the NFS server. |

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

Destination mount path. The path must be absolute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#mount_point GoogleVertexAiCustomJob#mount_point}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path"></a>

```python
path: str
```

- *Type:* str

Source path exported from NFS database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#path GoogleVertexAiCustomJob#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server"></a>

```python
server: str
```

- *Type:* str

IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#server GoogleVertexAiCustomJob#server}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec(
  executor_image_uri: str,
  package_uris: typing.List[str],
  python_module: str,
  args: typing.List[str] = None,
  env: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri">executor_image_uri</a></code> | <code>str</code> | The URI of a container image in Artifact Registry that will run the provided Python package. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris">package_uris</a></code> | <code>typing.List[str]</code> | The Google Cloud Storage location of the Python package files which are the training program and its dependent packages. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule">python_module</a></code> | <code>str</code> | The Python module name to run after installing the packages. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args">args</a></code> | <code>typing.List[str]</code> | Command line arguments to be passed to the Python task. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env">env</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>]</code> | env block. |

---

##### `executor_image_uri`<sup>Required</sup> <a name="executor_image_uri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri"></a>

```python
executor_image_uri: str
```

- *Type:* str

The URI of a container image in Artifact Registry that will run the provided Python package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#executor_image_uri GoogleVertexAiCustomJob#executor_image_uri}

---

##### `package_uris`<sup>Required</sup> <a name="package_uris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris"></a>

```python
package_uris: typing.List[str]
```

- *Type:* typing.List[str]

The Google Cloud Storage location of the Python package files which are the training program and its dependent packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#package_uris GoogleVertexAiCustomJob#package_uris}

---

##### `python_module`<sup>Required</sup> <a name="python_module" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule"></a>

```python
python_module: str
```

- *Type:* str

The Python module name to run after installing the packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#python_module GoogleVertexAiCustomJob#python_module}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Command line arguments to be passed to the Python task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env"></a>

```python
env: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}

---

### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name">name</a></code> | <code>str</code> | Name of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value">value</a></code> | <code>str</code> | Value of the environment variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#name GoogleVertexAiCustomJob#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#value GoogleVertexAiCustomJob#value}

---

### GoogleVertexAiCustomJobTimeouts <a name="GoogleVertexAiCustomJobTimeouts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#create GoogleVertexAiCustomJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#delete GoogleVertexAiCustomJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#update GoogleVertexAiCustomJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#create GoogleVertexAiCustomJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#delete GoogleVertexAiCustomJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#update GoogleVertexAiCustomJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiCustomJobEncryptionSpecOutputReference <a name="GoogleVertexAiCustomJobEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobEncryptionSpec">GoogleVertexAiCustomJobEncryptionSpec</a>

---


### GoogleVertexAiCustomJobErrorList <a name="GoogleVertexAiCustomJobErrorList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiCustomJobErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleVertexAiCustomJobErrorOutputReference <a name="GoogleVertexAiCustomJobErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError">GoogleVertexAiCustomJobError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobErrorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobError">GoogleVertexAiCustomJobError</a>

---


### GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference <a name="GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput">output_uri_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix">output_uri_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_uri_prefix_input`<sup>Optional</sup> <a name="output_uri_prefix_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput"></a>

```python
output_uri_prefix_input: str
```

- *Type:* str

---

##### `output_uri_prefix`<sup>Required</sup> <a name="output_uri_prefix" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix"></a>

```python
output_uri_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

---


### GoogleVertexAiCustomJobJobSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory">put_base_output_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig">put_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling">put_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs">put_worker_pool_specs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory">reset_base_output_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess">reset_enable_dashboard_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess">reset_enable_web_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig">reset_psc_interface_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges">reset_reserved_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetScheduling">reset_scheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetTensorboard">reset_tensorboard</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_base_output_directory` <a name="put_base_output_directory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory"></a>

```python
def put_base_output_directory(
  output_uri_prefix: str
) -> None
```

###### `output_uri_prefix`<sup>Required</sup> <a name="output_uri_prefix" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory.parameter.outputUriPrefix"></a>

- *Type:* str

Cloud Storage folder URL to store the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#output_uri_prefix GoogleVertexAiCustomJob#output_uri_prefix}

---

##### `put_psc_interface_config` <a name="put_psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig"></a>

```python
def put_psc_interface_config(
  dns_peering_configs: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs] = None,
  network_attachment: str = None
) -> None
```

###### `dns_peering_configs`<sup>Optional</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig.parameter.dnsPeeringConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#dns_peering_configs GoogleVertexAiCustomJob#dns_peering_configs}

---

###### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig.parameter.networkAttachment"></a>

- *Type:* str

The name of the attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#network_attachment GoogleVertexAiCustomJob#network_attachment}

---

##### `put_scheduling` <a name="put_scheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling"></a>

```python
def put_scheduling(
  disable_retries: bool | IResolvable = None,
  max_wait_duration: str = None,
  restart_job_on_worker_restart: bool | IResolvable = None,
  strategy: str = None,
  timeout: str = None
) -> None
```

###### `disable_retries`<sup>Optional</sup> <a name="disable_retries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling.parameter.disableRetries"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the job should retry for internal errors after the job starts running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#disable_retries GoogleVertexAiCustomJob#disable_retries}

---

###### `max_wait_duration`<sup>Optional</sup> <a name="max_wait_duration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling.parameter.maxWaitDuration"></a>

- *Type:* str

The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#max_wait_duration GoogleVertexAiCustomJob#max_wait_duration}

---

###### `restart_job_on_worker_restart`<sup>Optional</sup> <a name="restart_job_on_worker_restart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling.parameter.restartJobOnWorkerRestart"></a>

- *Type:* bool | cdktn.IResolvable

Restarts the entire CustomJob if a worker gets restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#restart_job_on_worker_restart GoogleVertexAiCustomJob#restart_job_on_worker_restart}

---

###### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling.parameter.strategy"></a>

- *Type:* str

This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#strategy GoogleVertexAiCustomJob#strategy}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putScheduling.parameter.timeout"></a>

- *Type:* str

The maximum job running time.

The default is 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#timeout GoogleVertexAiCustomJob#timeout}

---

##### `put_worker_pool_specs` <a name="put_worker_pool_specs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs"></a>

```python
def put_worker_pool_specs(
  value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>]

---

##### `reset_base_output_directory` <a name="reset_base_output_directory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory"></a>

```python
def reset_base_output_directory() -> None
```

##### `reset_enable_dashboard_access` <a name="reset_enable_dashboard_access" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess"></a>

```python
def reset_enable_dashboard_access() -> None
```

##### `reset_enable_web_access` <a name="reset_enable_web_access" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess"></a>

```python
def reset_enable_web_access() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_psc_interface_config` <a name="reset_psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig"></a>

```python
def reset_psc_interface_config() -> None
```

##### `reset_reserved_ip_ranges` <a name="reset_reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges"></a>

```python
def reset_reserved_ip_ranges() -> None
```

##### `reset_scheduling` <a name="reset_scheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetScheduling"></a>

```python
def reset_scheduling() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_tensorboard` <a name="reset_tensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.resetTensorboard"></a>

```python
def reset_tensorboard() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory">base_output_directory</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig">psc_interface_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference">GoogleVertexAiCustomJobJobSpecSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs">worker_pool_specs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput">base_output_directory_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput">enable_dashboard_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput">enable_web_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput">psc_interface_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput">reserved_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.schedulingInput">scheduling_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboardInput">tensorboard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput">worker_pool_specs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess">enable_dashboard_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccess">enable_web_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges">reserved_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboard">tensorboard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_output_directory`<sup>Required</sup> <a name="base_output_directory" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory"></a>

```python
base_output_directory: GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">GoogleVertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a>

---

##### `psc_interface_config`<sup>Required</sup> <a name="psc_interface_config" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig"></a>

```python
psc_interface_config: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.scheduling"></a>

```python
scheduling: GoogleVertexAiCustomJobJobSpecSchedulingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference">GoogleVertexAiCustomJobJobSpecSchedulingOutputReference</a>

---

##### `worker_pool_specs`<sup>Required</sup> <a name="worker_pool_specs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs"></a>

```python
worker_pool_specs: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList</a>

---

##### `base_output_directory_input`<sup>Optional</sup> <a name="base_output_directory_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput"></a>

```python
base_output_directory_input: GoogleVertexAiCustomJobJobSpecBaseOutputDirectory
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecBaseOutputDirectory">GoogleVertexAiCustomJobJobSpecBaseOutputDirectory</a>

---

##### `enable_dashboard_access_input`<sup>Optional</sup> <a name="enable_dashboard_access_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput"></a>

```python
enable_dashboard_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_web_access_input`<sup>Optional</sup> <a name="enable_web_access_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput"></a>

```python
enable_web_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `psc_interface_config_input`<sup>Optional</sup> <a name="psc_interface_config_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput"></a>

```python
psc_interface_config_input: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

---

##### `reserved_ip_ranges_input`<sup>Optional</sup> <a name="reserved_ip_ranges_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput"></a>

```python
reserved_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_input`<sup>Optional</sup> <a name="scheduling_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.schedulingInput"></a>

```python
scheduling_input: GoogleVertexAiCustomJobJobSpecScheduling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `tensorboard_input`<sup>Optional</sup> <a name="tensorboard_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboardInput"></a>

```python
tensorboard_input: str
```

- *Type:* str

---

##### `worker_pool_specs_input`<sup>Optional</sup> <a name="worker_pool_specs_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput"></a>

```python
worker_pool_specs_input: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>]

---

##### `enable_dashboard_access`<sup>Required</sup> <a name="enable_dashboard_access" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess"></a>

```python
enable_dashboard_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_web_access`<sup>Required</sup> <a name="enable_web_access" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.enableWebAccess"></a>

```python
enable_web_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `reserved_ip_ranges`<sup>Required</sup> <a name="reserved_ip_ranges" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges"></a>

```python
reserved_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `tensorboard`<sup>Required</sup> <a name="tensorboard" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.tensorboard"></a>

```python
tensorboard: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobJobSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpec">GoogleVertexAiCustomJobJobSpec</a>

---


### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>]

---


### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">target_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">target_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">target_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">target_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `target_network_input`<sup>Optional</sup> <a name="target_network_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```python
target_network_input: str
```

- *Type:* str

---

##### `target_project_input`<sup>Optional</sup> <a name="target_project_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```python
target_project_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `target_network`<sup>Required</sup> <a name="target_network" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```python
target_network: str
```

- *Type:* str

---

##### `target_project`<sup>Required</sup> <a name="target_project" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```python
target_project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference <a name="GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs">put_dns_peering_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">reset_dns_peering_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment">reset_network_attachment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_peering_configs` <a name="put_dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```python
def put_dns_peering_configs(
  value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>]

---

##### `reset_dns_peering_configs` <a name="reset_dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```python
def reset_dns_peering_configs() -> None
```

##### `reset_network_attachment` <a name="reset_network_attachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```python
def reset_network_attachment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">dns_peering_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">dns_peering_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_peering_configs`<sup>Required</sup> <a name="dns_peering_configs" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```python
dns_peering_configs: GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `dns_peering_configs_input`<sup>Optional</sup> <a name="dns_peering_configs_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```python
dns_peering_configs_input: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>]

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobJobSpecPscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecPscInterfaceConfig">GoogleVertexAiCustomJobJobSpecPscInterfaceConfig</a>

---


### GoogleVertexAiCustomJobJobSpecSchedulingOutputReference <a name="GoogleVertexAiCustomJobJobSpecSchedulingOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries">reset_disable_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration">reset_max_wait_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart">reset_restart_job_on_worker_restart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy">reset_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_retries` <a name="reset_disable_retries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries"></a>

```python
def reset_disable_retries() -> None
```

##### `reset_max_wait_duration` <a name="reset_max_wait_duration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration"></a>

```python
def reset_max_wait_duration() -> None
```

##### `reset_restart_job_on_worker_restart` <a name="reset_restart_job_on_worker_restart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart"></a>

```python
def reset_restart_job_on_worker_restart() -> None
```

##### `reset_strategy` <a name="reset_strategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy"></a>

```python
def reset_strategy() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput">disable_retries_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput">max_wait_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput">restart_job_on_worker_restart_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries">disable_retries</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration">max_wait_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart">restart_job_on_worker_restart</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_retries_input`<sup>Optional</sup> <a name="disable_retries_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput"></a>

```python
disable_retries_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_wait_duration_input`<sup>Optional</sup> <a name="max_wait_duration_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput"></a>

```python
max_wait_duration_input: str
```

- *Type:* str

---

##### `restart_job_on_worker_restart_input`<sup>Optional</sup> <a name="restart_job_on_worker_restart_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput"></a>

```python
restart_job_on_worker_restart_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `disable_retries`<sup>Required</sup> <a name="disable_retries" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries"></a>

```python
disable_retries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_wait_duration`<sup>Required</sup> <a name="max_wait_duration" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration"></a>

```python
max_wait_duration: str
```

- *Type:* str

---

##### `restart_job_on_worker_restart`<sup>Required</sup> <a name="restart_job_on_worker_restart" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart"></a>

```python
restart_job_on_worker_restart: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobJobSpecScheduling
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecScheduling">GoogleVertexAiCustomJobJobSpecScheduling</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv">reset_env</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv"></a>

```python
def put_env(
  value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>]

---

##### `reset_args` <a name="reset_args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput">env_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env"></a>

```python
env: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput"></a>

```python
env_input: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>]

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb">reset_boot_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType">reset_boot_disk_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boot_disk_size_gb` <a name="reset_boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb"></a>

```python
def reset_boot_disk_size_gb() -> None
```

##### `reset_boot_disk_type` <a name="reset_boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType"></a>

```python
def reset_boot_disk_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput">boot_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput">boot_disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType">boot_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_disk_size_gb_input`<sup>Optional</sup> <a name="boot_disk_size_gb_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput"></a>

```python
boot_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type_input`<sup>Optional</sup> <a name="boot_disk_type_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput"></a>

```python
boot_disk_type_input: str
```

- *Type:* str

---

##### `boot_disk_size_gb`<sup>Required</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `boot_disk_type`<sup>Required</sup> <a name="boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType"></a>

```python
boot_disk_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput">filesystem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput">instance_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput">volume_handle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem">filesystem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp">instance_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle">volume_handle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filesystem_input`<sup>Optional</sup> <a name="filesystem_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput"></a>

```python
filesystem_input: str
```

- *Type:* str

---

##### `instance_ip_input`<sup>Optional</sup> <a name="instance_ip_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput"></a>

```python
instance_ip_input: str
```

- *Type:* str

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `volume_handle_input`<sup>Optional</sup> <a name="volume_handle_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput"></a>

```python
volume_handle_input: str
```

- *Type:* str

---

##### `filesystem`<sup>Required</sup> <a name="filesystem" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem"></a>

```python
filesystem: str
```

- *Type:* str

---

##### `instance_ip`<sup>Required</sup> <a name="instance_ip" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp"></a>

```python
instance_ip: str
```

- *Type:* str

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `volume_handle`<sup>Required</sup> <a name="volume_handle" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle"></a>

```python
volume_handle: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity">put_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity">reset_reservation_affinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology">reset_tpu_topology</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_reservation_affinity` <a name="put_reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity"></a>

```python
def put_reservation_affinity(
  reservation_affinity_type: str,
  key: str = None,
  values: typing.List[str] = None
) -> None
```

###### `reservation_affinity_type`<sup>Required</sup> <a name="reservation_affinity_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity.parameter.reservationAffinityType"></a>

- *Type:* str

Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity_type GoogleVertexAiCustomJob#reservation_affinity_type}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity.parameter.key"></a>

- *Type:* str

Corresponds to the label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#key GoogleVertexAiCustomJob#key}

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity.parameter.values"></a>

- *Type:* typing.List[str]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#values GoogleVertexAiCustomJob#values}

---

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_reservation_affinity` <a name="reset_reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity"></a>

```python
def reset_reservation_affinity() -> None
```

##### `reset_tpu_topology` <a name="reset_tpu_topology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology"></a>

```python
def reset_tpu_topology() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity">reservation_affinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput">reservation_affinity_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput">tpu_topology_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology">tpu_topology</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reservation_affinity`<sup>Required</sup> <a name="reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity"></a>

```python
reservation_affinity: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a>

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `reservation_affinity_input`<sup>Optional</sup> <a name="reservation_affinity_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput"></a>

```python
reservation_affinity_input: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---

##### `tpu_topology_input`<sup>Optional</sup> <a name="tpu_topology_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput"></a>

```python
tpu_topology_input: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `tpu_topology`<sup>Required</sup> <a name="tpu_topology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology"></a>

```python
tpu_topology: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">reservation_affinity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">reservation_affinity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `reservation_affinity_type_input`<sup>Optional</sup> <a name="reservation_affinity_type_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```python
reservation_affinity_type_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `reservation_affinity_type`<sup>Required</sup> <a name="reservation_affinity_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```python
reservation_affinity_type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec">put_container_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec">put_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts">put_lustre_mounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec">put_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts">put_nfs_mounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec">put_python_package_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec">reset_container_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec">reset_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts">reset_lustre_mounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec">reset_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts">reset_nfs_mounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec">reset_python_package_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount">reset_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_spec` <a name="put_container_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec"></a>

```python
def put_container_spec(
  image_uri: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv] = None
) -> None
```

###### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec.parameter.imageUri"></a>

- *Type:* str

The URI of a container image in the Container Registry that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#image_uri GoogleVertexAiCustomJob#image_uri}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec.parameter.args"></a>

- *Type:* typing.List[str]

The arguments to be passed when starting the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}

---

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec.parameter.command"></a>

- *Type:* typing.List[str]

The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#command GoogleVertexAiCustomJob#command}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec.parameter.env"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}

---

##### `put_disk_spec` <a name="put_disk_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec"></a>

```python
def put_disk_spec(
  boot_disk_size_gb: typing.Union[int, float] = None,
  boot_disk_type: str = None
) -> None
```

###### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec.parameter.bootDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_size_gb GoogleVertexAiCustomJob#boot_disk_size_gb}

---

###### `boot_disk_type`<sup>Optional</sup> <a name="boot_disk_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec.parameter.bootDiskType"></a>

- *Type:* str

Type of the disk.

The default value depends on the machine type. Valid values include: "pd-ssd", "pd-standard", "pd-balanced", and "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#boot_disk_type GoogleVertexAiCustomJob#boot_disk_type}

---

##### `put_lustre_mounts` <a name="put_lustre_mounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts"></a>

```python
def put_lustre_mounts(
  value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>]

---

##### `put_machine_spec` <a name="put_machine_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec"></a>

```python
def put_machine_spec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None,
  reservation_affinity: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity = None,
  tpu_topology: str = None
) -> None
```

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec.parameter.acceleratorCount"></a>

- *Type:* typing.Union[int, float]

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_count GoogleVertexAiCustomJob#accelerator_count}

---

###### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec.parameter.acceleratorType"></a>

- *Type:* str

The type of accelerator(s) that may be attached to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#accelerator_type GoogleVertexAiCustomJob#accelerator_type}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec.parameter.machineType"></a>

- *Type:* str

The type of the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#machine_type GoogleVertexAiCustomJob#machine_type}

---

###### `reservation_affinity`<sup>Optional</sup> <a name="reservation_affinity" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec.parameter.reservationAffinity"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#reservation_affinity GoogleVertexAiCustomJob#reservation_affinity}

---

###### `tpu_topology`<sup>Optional</sup> <a name="tpu_topology" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec.parameter.tpuTopology"></a>

- *Type:* str

The topology of the TPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#tpu_topology GoogleVertexAiCustomJob#tpu_topology}

---

##### `put_nfs_mounts` <a name="put_nfs_mounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts"></a>

```python
def put_nfs_mounts(
  value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>]

---

##### `put_python_package_spec` <a name="put_python_package_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec"></a>

```python
def put_python_package_spec(
  executor_image_uri: str,
  package_uris: typing.List[str],
  python_module: str,
  args: typing.List[str] = None,
  env: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv] = None
) -> None
```

###### `executor_image_uri`<sup>Required</sup> <a name="executor_image_uri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec.parameter.executorImageUri"></a>

- *Type:* str

The URI of a container image in Artifact Registry that will run the provided Python package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#executor_image_uri GoogleVertexAiCustomJob#executor_image_uri}

---

###### `package_uris`<sup>Required</sup> <a name="package_uris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec.parameter.packageUris"></a>

- *Type:* typing.List[str]

The Google Cloud Storage location of the Python package files which are the training program and its dependent packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#package_uris GoogleVertexAiCustomJob#package_uris}

---

###### `python_module`<sup>Required</sup> <a name="python_module" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec.parameter.pythonModule"></a>

- *Type:* str

The Python module name to run after installing the packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#python_module GoogleVertexAiCustomJob#python_module}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec.parameter.args"></a>

- *Type:* typing.List[str]

Command line arguments to be passed to the Python task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#args GoogleVertexAiCustomJob#args}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec.parameter.env"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_custom_job#env GoogleVertexAiCustomJob#env}

---

##### `reset_container_spec` <a name="reset_container_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec"></a>

```python
def reset_container_spec() -> None
```

##### `reset_disk_spec` <a name="reset_disk_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec"></a>

```python
def reset_disk_spec() -> None
```

##### `reset_lustre_mounts` <a name="reset_lustre_mounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts"></a>

```python
def reset_lustre_mounts() -> None
```

##### `reset_machine_spec` <a name="reset_machine_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec"></a>

```python
def reset_machine_spec() -> None
```

##### `reset_nfs_mounts` <a name="reset_nfs_mounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts"></a>

```python
def reset_nfs_mounts() -> None
```

##### `reset_python_package_spec` <a name="reset_python_package_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec"></a>

```python
def reset_python_package_spec() -> None
```

##### `reset_replica_count` <a name="reset_replica_count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount"></a>

```python
def reset_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec">disk_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts">lustre_mounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts">nfs_mounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec">python_package_spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput">container_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput">disk_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput">lustre_mounts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput">machine_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput">nfs_mounts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput">python_package_spec_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput">replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_spec`<sup>Required</sup> <a name="container_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec"></a>

```python
container_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a>

---

##### `disk_spec`<sup>Required</sup> <a name="disk_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec"></a>

```python
disk_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a>

---

##### `lustre_mounts`<sup>Required</sup> <a name="lustre_mounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts"></a>

```python
lustre_mounts: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a>

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec"></a>

```python
machine_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a>

---

##### `nfs_mounts`<sup>Required</sup> <a name="nfs_mounts" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts"></a>

```python
nfs_mounts: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a>

---

##### `python_package_spec`<sup>Required</sup> <a name="python_package_spec" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec"></a>

```python
python_package_spec: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a>

---

##### `container_spec_input`<sup>Optional</sup> <a name="container_spec_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput"></a>

```python
container_spec_input: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---

##### `disk_spec_input`<sup>Optional</sup> <a name="disk_spec_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput"></a>

```python
disk_spec_input: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---

##### `lustre_mounts_input`<sup>Optional</sup> <a name="lustre_mounts_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput"></a>

```python
lustre_mounts_input: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>]

---

##### `machine_spec_input`<sup>Optional</sup> <a name="machine_spec_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput"></a>

```python
machine_spec_input: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---

##### `nfs_mounts_input`<sup>Optional</sup> <a name="nfs_mounts_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput"></a>

```python
nfs_mounts_input: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>]

---

##### `python_package_spec_input`<sup>Optional</sup> <a name="python_package_spec_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput"></a>

```python
python_package_spec_input: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---

##### `replica_count_input`<sup>Optional</sup> <a name="replica_count_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput"></a>

```python
replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecs</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>]

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>

---


### GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference <a name="GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv">reset_env</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv"></a>

```python
def put_env(
  value: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>]

---

##### `reset_args` <a name="reset_args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput">env_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput">executor_image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput">package_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput">python_module_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri">executor_image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris">package_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule">python_module</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env"></a>

```python
env: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput"></a>

```python
env_input: IResolvable | typing.List[GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>]

---

##### `executor_image_uri_input`<sup>Optional</sup> <a name="executor_image_uri_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput"></a>

```python
executor_image_uri_input: str
```

- *Type:* str

---

##### `package_uris_input`<sup>Optional</sup> <a name="package_uris_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput"></a>

```python
package_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `python_module_input`<sup>Optional</sup> <a name="python_module_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput"></a>

```python
python_module_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `executor_image_uri`<sup>Required</sup> <a name="executor_image_uri" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri"></a>

```python
executor_image_uri: str
```

- *Type:* str

---

##### `package_uris`<sup>Required</sup> <a name="package_uris" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris"></a>

```python
package_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `python_module`<sup>Required</sup> <a name="python_module" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule"></a>

```python
python_module: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">GoogleVertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---


### GoogleVertexAiCustomJobTimeoutsOutputReference <a name="GoogleVertexAiCustomJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_custom_job

googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiCustomJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiCustomJob.GoogleVertexAiCustomJobTimeouts">GoogleVertexAiCustomJobTimeouts</a>

---



