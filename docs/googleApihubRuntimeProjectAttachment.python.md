# `googleApihubRuntimeProjectAttachment` Submodule <a name="`googleApihubRuntimeProjectAttachment` Submodule" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubRuntimeProjectAttachment <a name="GoogleApihubRuntimeProjectAttachment" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment google_apihub_runtime_project_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apihub_runtime_project_attachment

googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  runtime_project: str,
  runtime_project_attachment_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApihubRuntimeProjectAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProject">runtime_project</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProjectAttachmentId">runtime_project_attachment_id</a></code> | <code>str</code> | The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.location"></a>

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#location GoogleApihubRuntimeProjectAttachment#location}

---

##### `runtime_project`<sup>Required</sup> <a name="runtime_project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProject"></a>

- *Type:* str

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project GoogleApihubRuntimeProjectAttachment#runtime_project}

---

##### `runtime_project_attachment_id`<sup>Required</sup> <a name="runtime_project_attachment_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProjectAttachmentId"></a>

- *Type:* str

The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name.

The ID must be the same
as the project ID of the Google cloud project specified in the
runtime_project_attachment.runtime_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project_attachment_id GoogleApihubRuntimeProjectAttachment#runtime_project_attachment_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#deletion_policy GoogleApihubRuntimeProjectAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#timeouts GoogleApihubRuntimeProjectAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#create GoogleApihubRuntimeProjectAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#delete GoogleApihubRuntimeProjectAttachment#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_apihub_runtime_project_attachment

googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_apihub_runtime_project_attachment

googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_apihub_runtime_project_attachment

googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_apihub_runtime_project_attachment

googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApihubRuntimeProjectAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApihubRuntimeProjectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApihubRuntimeProjectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference">GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput">runtime_project_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectInput">runtime_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProject">runtime_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId">runtime_project_attachment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeouts"></a>

```python
timeouts: GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference">GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `runtime_project_attachment_id_input`<sup>Optional</sup> <a name="runtime_project_attachment_id_input" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput"></a>

```python
runtime_project_attachment_id_input: str
```

- *Type:* str

---

##### `runtime_project_input`<sup>Optional</sup> <a name="runtime_project_input" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectInput"></a>

```python
runtime_project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleApihubRuntimeProjectAttachmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `runtime_project`<sup>Required</sup> <a name="runtime_project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProject"></a>

```python
runtime_project: str
```

- *Type:* str

---

##### `runtime_project_attachment_id`<sup>Required</sup> <a name="runtime_project_attachment_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId"></a>

```python
runtime_project_attachment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubRuntimeProjectAttachmentConfig <a name="GoogleApihubRuntimeProjectAttachmentConfig" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apihub_runtime_project_attachment

googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  runtime_project: str,
  runtime_project_attachment_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApihubRuntimeProjectAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProject">runtime_project</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId">runtime_project_attachment_id</a></code> | <code>str</code> | The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#location GoogleApihubRuntimeProjectAttachment#location}

---

##### `runtime_project`<sup>Required</sup> <a name="runtime_project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProject"></a>

```python
runtime_project: str
```

- *Type:* str

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project GoogleApihubRuntimeProjectAttachment#runtime_project}

---

##### `runtime_project_attachment_id`<sup>Required</sup> <a name="runtime_project_attachment_id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId"></a>

```python
runtime_project_attachment_id: str
```

- *Type:* str

The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name.

The ID must be the same
as the project ID of the Google cloud project specified in the
runtime_project_attachment.runtime_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#runtime_project_attachment_id GoogleApihubRuntimeProjectAttachment#runtime_project_attachment_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#deletion_policy GoogleApihubRuntimeProjectAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#id GoogleApihubRuntimeProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#project GoogleApihubRuntimeProjectAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentConfig.property.timeouts"></a>

```python
timeouts: GoogleApihubRuntimeProjectAttachmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#timeouts GoogleApihubRuntimeProjectAttachment#timeouts}

---

### GoogleApihubRuntimeProjectAttachmentTimeouts <a name="GoogleApihubRuntimeProjectAttachmentTimeouts" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apihub_runtime_project_attachment

googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#create GoogleApihubRuntimeProjectAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#delete GoogleApihubRuntimeProjectAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#create GoogleApihubRuntimeProjectAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_apihub_runtime_project_attachment#delete GoogleApihubRuntimeProjectAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference <a name="GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apihub_runtime_project_attachment

googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApihubRuntimeProjectAttachmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApihubRuntimeProjectAttachment.GoogleApihubRuntimeProjectAttachmentTimeouts">GoogleApihubRuntimeProjectAttachmentTimeouts</a>

---



