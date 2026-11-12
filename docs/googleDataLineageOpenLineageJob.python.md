# `googleDataLineageOpenLineageJob` Submodule <a name="`googleDataLineageOpenLineageJob` Submodule" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLineageOpenLineageJob <a name="GoogleDataLineageOpenLineageJob" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job google_data_lineage_open_lineage_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  namespace: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInput] = None,
  output: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutput] = None,
  timeouts: GoogleDataLineageOpenLineageJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.input">input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>]</code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.output">output</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>]</code> | output block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.name"></a>

- *Type:* str

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.namespace"></a>

- *Type:* str

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#deletion_policy GoogleDataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.description"></a>

- *Type:* str

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#description GoogleDataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.input"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.output"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#output GoogleDataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#timeouts GoogleDataLineageOpenLineageJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput">put_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput">reset_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input` <a name="put_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput"></a>

```python
def put_input(
  value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>]

---

##### `put_output` <a name="put_output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput"></a>

```python
def put_output(
  value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putOutput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetOutput"></a>

```python
def reset_output() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDataLineageOpenLineageJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataLineageOpenLineageJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataLineageOpenLineageJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataLineageOpenLineageJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input">input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output">output</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process">process</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run">run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput">input_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput">output_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.input"></a>

```python
input: GoogleDataLineageOpenLineageJobInputList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList">GoogleDataLineageOpenLineageJobInputList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.output"></a>

```python
output: GoogleDataLineageOpenLineageJobOutputList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList">GoogleDataLineageOpenLineageJobOutputList</a>

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.process"></a>

```python
process: str
```

- *Type:* str

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.run"></a>

```python
run: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeouts"></a>

```python
timeouts: GoogleDataLineageOpenLineageJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference">GoogleDataLineageOpenLineageJobTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.inputInput"></a>

```python
input_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.outputInput"></a>

```python
output_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDataLineageOpenLineageJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLineageOpenLineageJobConfig <a name="GoogleDataLineageOpenLineageJobConfig" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  namespace: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInput] = None,
  output: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutput] = None,
  timeouts: GoogleDataLineageOpenLineageJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name">name</a></code> | <code>str</code> | Name of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the OpenLineage job. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description">description</a></code> | <code>str</code> | Description of the OpenLineage job. Changes to description do not trigger updates. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input">input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>]</code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output">output</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>]</code> | output block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the OpenLineage job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#deletion_policy GoogleDataLineageOpenLineageJob#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the OpenLineage job. Changes to description do not trigger updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#description GoogleDataLineageOpenLineageJob#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#id GoogleDataLineageOpenLineageJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.input"></a>

```python
input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.output"></a>

```python
output: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>]

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#output GoogleDataLineageOpenLineageJob#output}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobConfig.property.timeouts"></a>

```python
timeouts: GoogleDataLineageOpenLineageJobTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#timeouts GoogleDataLineageOpenLineageJob#timeouts}

---

### GoogleDataLineageOpenLineageJobInput <a name="GoogleDataLineageOpenLineageJobInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput(
  name: str,
  namespace: str,
  catalog: GoogleDataLineageOpenLineageJobInputCatalog = None,
  symlink: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInputSymlink] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name">name</a></code> | <code>str</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink">symlink</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>]</code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.catalog"></a>

```python
catalog: GoogleDataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput.property.symlink"></a>

```python
symlink: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobInputCatalog <a name="GoogleDataLineageOpenLineageJobInputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog(
  framework: str,
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework">framework</a></code> | <code>str</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name">name</a></code> | <code>str</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type">type</a></code> | <code>str</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.framework"></a>

```python
framework: str
```

- *Type:* str

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog.property.type"></a>

```python
type: str
```

- *Type:* str

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobInputSymlink <a name="GoogleDataLineageOpenLineageJobInputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink(
  name: str,
  namespace: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name">name</a></code> | <code>str</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type">type</a></code> | <code>str</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutput <a name="GoogleDataLineageOpenLineageJobOutput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput(
  name: str,
  namespace: str,
  catalog: GoogleDataLineageOpenLineageJobOutputCatalog = None,
  column_lineage: GoogleDataLineageOpenLineageJobOutputColumnLineage = None,
  symlink: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputSymlink] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name">name</a></code> | <code>str</code> | Name of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | catalog block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage">column_lineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | column_lineage block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink">symlink</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>]</code> | symlink block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.catalog"></a>

```python
catalog: GoogleDataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#catalog GoogleDataLineageOpenLineageJob#catalog}

---

##### `column_lineage`<sup>Optional</sup> <a name="column_lineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.columnLineage"></a>

```python
column_lineage: GoogleDataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

column_lineage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#column_lineage GoogleDataLineageOpenLineageJob#column_lineage}

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput.property.symlink"></a>

```python
symlink: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>]

symlink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#symlink GoogleDataLineageOpenLineageJob#symlink}

---

### GoogleDataLineageOpenLineageJobOutputCatalog <a name="GoogleDataLineageOpenLineageJobOutputCatalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog(
  framework: str,
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework">framework</a></code> | <code>str</code> | Catalog framework. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name">name</a></code> | <code>str</code> | Catalog entity name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type">type</a></code> | <code>str</code> | Catalog entity type. |

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.framework"></a>

```python
framework: str
```

- *Type:* str

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog.property.type"></a>

```python
type: str
```

- *Type:* str

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineage <a name="GoogleDataLineageOpenLineageJobOutputColumnLineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage(
  field: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageField],
  dataset_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field">field</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>]</code> | field block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput">dataset_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]</code> | dataset_input block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.field"></a>

```python
field: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>]

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage.property.datasetInput"></a>

```python
dataset_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#dataset_input GoogleDataLineageOpenLineageJob#dataset_input}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput(
  field: str,
  name: str,
  namespace: str,
  transformation: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field">field</a></code> | <code>str</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name">name</a></code> | <code>str</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation">transformation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]</code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.field"></a>

```python
field: str
```

- *Type:* str

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput.property.transformation"></a>

```python
transformation: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation(
  type: str,
  subtype: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type">type</a></code> | <code>str</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype">subtype</a></code> | <code>str</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.type"></a>

```python
type: str
```

- *Type:* str

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageField <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageField" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField(
  input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input">input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]</code> | input block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name">name</a></code> | <code>str</code> | Output field name. |

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.input"></a>

```python
input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#input GoogleDataLineageOpenLineageJob#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField.property.name"></a>

```python
name: str
```

- *Type:* str

Output field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput(
  field: str,
  name: str,
  namespace: str,
  transformation: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field">field</a></code> | <code>str</code> | Source field name. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name">name</a></code> | <code>str</code> | Name of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the source dataset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation">transformation</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]</code> | transformation block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.field"></a>

```python
field: str
```

- *Type:* str

Source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the source dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput.property.transformation"></a>

```python
transformation: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#transformation GoogleDataLineageOpenLineageJob#transformation}

---

### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation(
  type: str,
  subtype: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type">type</a></code> | <code>str</code> | Transformation type. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype">subtype</a></code> | <code>str</code> | Transformation subtype. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.type"></a>

```python
type: str
```

- *Type:* str

Transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

Transformation subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#subtype GoogleDataLineageOpenLineageJob#subtype}

---

### GoogleDataLineageOpenLineageJobOutputSymlink <a name="GoogleDataLineageOpenLineageJobOutputSymlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink(
  name: str,
  namespace: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name">name</a></code> | <code>str</code> | Name of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the symlink target. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type">type</a></code> | <code>str</code> | Type of the symlink target. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#namespace GoogleDataLineageOpenLineageJob#namespace}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the symlink target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

### GoogleDataLineageOpenLineageJobTimeouts <a name="GoogleDataLineageOpenLineageJobTimeouts" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#create GoogleDataLineageOpenLineageJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#delete GoogleDataLineageOpenLineageJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#update GoogleDataLineageOpenLineageJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLineageOpenLineageJobInputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobInputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---


### GoogleDataLineageOpenLineageJobInputList <a name="GoogleDataLineageOpenLineageJobInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageOpenLineageJobInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>]

---


### GoogleDataLineageOpenLineageJobInputOutputReference <a name="GoogleDataLineageOpenLineageJobInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog">put_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink">put_symlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink">reset_symlink</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalog` <a name="put_catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog"></a>

```python
def put_catalog(
  framework: str,
  name: str,
  type: str
) -> None
```

###### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.framework"></a>

- *Type:* str

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.name"></a>

- *Type:* str

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putCatalog.parameter.type"></a>

- *Type:* str

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `put_symlink` <a name="put_symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink"></a>

```python
def put_symlink(
  value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInputSymlink]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.putSymlink.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>]

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_symlink` <a name="reset_symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.resetSymlink"></a>

```python
def reset_symlink() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput">catalog_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput">symlink_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalog"></a>

```python
catalog: GoogleDataLineageOpenLineageJobInputCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalogOutputReference">GoogleDataLineageOpenLineageJobInputCatalogOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlink"></a>

```python
symlink: GoogleDataLineageOpenLineageJobInputSymlinkList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList">GoogleDataLineageOpenLineageJobInputSymlinkList</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.catalogInput"></a>

```python
catalog_input: GoogleDataLineageOpenLineageJobInputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputCatalog">GoogleDataLineageOpenLineageJobInputCatalog</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `symlink_input`<sup>Optional</sup> <a name="symlink_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.symlinkInput"></a>

```python
symlink_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInput">GoogleDataLineageOpenLineageJobInput</a>

---


### GoogleDataLineageOpenLineageJobInputSymlinkList <a name="GoogleDataLineageOpenLineageJobInputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageOpenLineageJobInputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobInputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>]

---


### GoogleDataLineageOpenLineageJobInputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobInputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlinkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobInputSymlink
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobInputSymlink">GoogleDataLineageOpenLineageJobInputSymlink</a>

---


### GoogleDataLineageOpenLineageJobOutputCatalogOutputReference <a name="GoogleDataLineageOpenLineageJobOutputCatalogOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation">put_transformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation">reset_transformation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_transformation` <a name="put_transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation"></a>

```python
def put_transformation(
  value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]

---

##### `reset_transformation` <a name="reset_transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.resetTransformation"></a>

```python
def reset_transformation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput">transformation_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformation"></a>

```python
transformation: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `transformation_input`<sup>Optional</sup> <a name="transformation_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.transformationInput"></a>

```python
transformation_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype">reset_subtype</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subtype` <a name="reset_subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.resetSubtype"></a>

```python
def reset_subtype() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput">subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subtype_input`<sup>Optional</sup> <a name="subtype_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtypeInput"></a>

```python
subtype_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputTransformation</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation">put_transformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation">reset_transformation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_transformation` <a name="put_transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation"></a>

```python
def put_transformation(
  value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.putTransformation.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]

---

##### `reset_transformation` <a name="reset_transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.resetTransformation"></a>

```python
def reset_transformation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput">transformation_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformation"></a>

```python
transformation: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `transformation_input`<sup>Optional</sup> <a name="transformation_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.transformationInput"></a>

```python
transformation_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype">reset_subtype</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subtype` <a name="reset_subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.resetSubtype"></a>

```python
def reset_subtype() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput">subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subtype_input`<sup>Optional</sup> <a name="subtype_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtypeInput"></a>

```python
subtype_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputTransformation</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>]

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput">put_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input` <a name="put_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput"></a>

```python
def put_input(
  value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.putInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input">input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput">input_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.input"></a>

```python
input: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInputList</a>

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.inputInput"></a>

```python
input_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldInput</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobOutputColumnLineageField
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>

---


### GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference <a name="GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput">put_dataset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField">put_field</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput">reset_dataset_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset_input` <a name="put_dataset_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput"></a>

```python
def put_dataset_input(
  value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putDatasetInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

---

##### `put_field` <a name="put_field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField"></a>

```python
def put_field(
  value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageField]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.putField.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>]

---

##### `reset_dataset_input` <a name="reset_dataset_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.resetDatasetInput"></a>

```python
def reset_dataset_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput">dataset_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field">field</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput">dataset_input_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput">field_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_input`<sup>Required</sup> <a name="dataset_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInput"></a>

```python
dataset_input: GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInputList</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.field"></a>

```python
field: GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList">GoogleDataLineageOpenLineageJobOutputColumnLineageFieldList</a>

---

##### `dataset_input_input`<sup>Optional</sup> <a name="dataset_input_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.datasetInputInput"></a>

```python
dataset_input_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.fieldInput"></a>

```python
field_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageField]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---


### GoogleDataLineageOpenLineageJobOutputList <a name="GoogleDataLineageOpenLineageJobOutputList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageOpenLineageJobOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>]

---


### GoogleDataLineageOpenLineageJobOutputOutputReference <a name="GoogleDataLineageOpenLineageJobOutputOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog">put_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage">put_column_lineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink">put_symlink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage">reset_column_lineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink">reset_symlink</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalog` <a name="put_catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog"></a>

```python
def put_catalog(
  framework: str,
  name: str,
  type: str
) -> None
```

###### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.framework"></a>

- *Type:* str

Catalog framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#framework GoogleDataLineageOpenLineageJob#framework}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.name"></a>

- *Type:* str

Catalog entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#name GoogleDataLineageOpenLineageJob#name}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putCatalog.parameter.type"></a>

- *Type:* str

Catalog entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#type GoogleDataLineageOpenLineageJob#type}

---

##### `put_column_lineage` <a name="put_column_lineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage"></a>

```python
def put_column_lineage(
  field: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageField],
  dataset_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput] = None
) -> None
```

###### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.field"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageField">GoogleDataLineageOpenLineageJobOutputColumnLineageField</a>]

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#field GoogleDataLineageOpenLineageJob#field}

---

###### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putColumnLineage.parameter.datasetInput"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput">GoogleDataLineageOpenLineageJobOutputColumnLineageDatasetInput</a>]

dataset_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_data_lineage_open_lineage_job#dataset_input GoogleDataLineageOpenLineageJob#dataset_input}

---

##### `put_symlink` <a name="put_symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink"></a>

```python
def put_symlink(
  value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputSymlink]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.putSymlink.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>]

---

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_column_lineage` <a name="reset_column_lineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetColumnLineage"></a>

```python
def reset_column_lineage() -> None
```

##### `reset_symlink` <a name="reset_symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.resetSymlink"></a>

```python
def reset_symlink() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage">column_lineage</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink">symlink</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput">catalog_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput">column_lineage_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput">symlink_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalog"></a>

```python
catalog: GoogleDataLineageOpenLineageJobOutputCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalogOutputReference">GoogleDataLineageOpenLineageJobOutputCatalogOutputReference</a>

---

##### `column_lineage`<sup>Required</sup> <a name="column_lineage" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineage"></a>

```python
column_lineage: GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference">GoogleDataLineageOpenLineageJobOutputColumnLineageOutputReference</a>

---

##### `symlink`<sup>Required</sup> <a name="symlink" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlink"></a>

```python
symlink: GoogleDataLineageOpenLineageJobOutputSymlinkList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList">GoogleDataLineageOpenLineageJobOutputSymlinkList</a>

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.catalogInput"></a>

```python
catalog_input: GoogleDataLineageOpenLineageJobOutputCatalog
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputCatalog">GoogleDataLineageOpenLineageJobOutputCatalog</a>

---

##### `column_lineage_input`<sup>Optional</sup> <a name="column_lineage_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.columnLineageInput"></a>

```python
column_lineage_input: GoogleDataLineageOpenLineageJobOutputColumnLineage
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputColumnLineage">GoogleDataLineageOpenLineageJobOutputColumnLineage</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `symlink_input`<sup>Optional</sup> <a name="symlink_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.symlinkInput"></a>

```python
symlink_input: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutput">GoogleDataLineageOpenLineageJobOutput</a>

---


### GoogleDataLineageOpenLineageJobOutputSymlinkList <a name="GoogleDataLineageOpenLineageJobOutputSymlinkList" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataLineageOpenLineageJobOutputSymlink]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>]

---


### GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference <a name="GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlinkOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobOutputSymlink
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobOutputSymlink">GoogleDataLineageOpenLineageJobOutputSymlink</a>

---


### GoogleDataLineageOpenLineageJobTimeoutsOutputReference <a name="GoogleDataLineageOpenLineageJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_data_lineage_open_lineage_job

googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataLineageOpenLineageJobTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataLineageOpenLineageJob.GoogleDataLineageOpenLineageJobTimeouts">GoogleDataLineageOpenLineageJobTimeouts</a>

---



