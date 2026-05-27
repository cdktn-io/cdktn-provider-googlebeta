# `googleChronicleDataTableRow` Submodule <a name="`googleChronicleDataTableRow` Submodule" id="@cdktn/provider-google-beta.googleChronicleDataTableRow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataTableRow <a name="GoogleChronicleDataTableRow" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row google_chronicle_data_table_row}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table_row

googleChronicleDataTableRow.GoogleChronicleDataTableRow(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_table_id: str,
  instance: str,
  location: str,
  values: typing.List[str],
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  row_time_to_live: str = None,
  timeouts: GoogleChronicleDataTableRowTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.dataTableId">data_table_id</a></code> | <code>str</code> | The ID of the parent DataTable. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The Chronicle instance ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.location">location</a></code> | <code>str</code> | The GCP location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.values">values</a></code> | <code>typing.List[str]</code> | All column values for a single row. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#id GoogleChronicleDataTableRow#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#project GoogleChronicleDataTableRow#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.rowTimeToLive">row_time_to_live</a></code> | <code>str</code> | User-provided TTL of the data table row. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_table_id`<sup>Required</sup> <a name="data_table_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.dataTableId"></a>

- *Type:* str

The ID of the parent DataTable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#data_table_id GoogleChronicleDataTableRow#data_table_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.instance"></a>

- *Type:* str

The Chronicle instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#instance GoogleChronicleDataTableRow#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.location"></a>

- *Type:* str

The GCP location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#location GoogleChronicleDataTableRow#location}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.values"></a>

- *Type:* typing.List[str]

All column values for a single row.

The values should be in the same order
as the columns of the data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#values GoogleChronicleDataTableRow#values}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#deletion_policy GoogleChronicleDataTableRow#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#id GoogleChronicleDataTableRow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#project GoogleChronicleDataTableRow#project}.

---

##### `row_time_to_live`<sup>Optional</sup> <a name="row_time_to_live" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.rowTimeToLive"></a>

- *Type:* str

User-provided TTL of the data table row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#row_time_to_live GoogleChronicleDataTableRow#row_time_to_live}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#timeouts GoogleChronicleDataTableRow#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetRowTimeToLive">reset_row_time_to_live</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#create GoogleChronicleDataTableRow#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#delete GoogleChronicleDataTableRow#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#update GoogleChronicleDataTableRow#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_row_time_to_live` <a name="reset_row_time_to_live" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetRowTimeToLive"></a>

```python
def reset_row_time_to_live() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleChronicleDataTableRow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table_row

googleChronicleDataTableRow.GoogleChronicleDataTableRow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table_row

googleChronicleDataTableRow.GoogleChronicleDataTableRow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table_row

googleChronicleDataTableRow.GoogleChronicleDataTableRow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table_row

googleChronicleDataTableRow.GoogleChronicleDataTableRow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleChronicleDataTableRow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleDataTableRow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleDataTableRow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataTableRow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableRow">data_table_row</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference">GoogleChronicleDataTableRowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableIdInput">data_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.rowTimeToLiveInput">row_time_to_live_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableId">data_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.rowTimeToLive">row_time_to_live</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_table_row`<sup>Required</sup> <a name="data_table_row" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableRow"></a>

```python
data_table_row: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.timeouts"></a>

```python
timeouts: GoogleChronicleDataTableRowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference">GoogleChronicleDataTableRowTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `data_table_id_input`<sup>Optional</sup> <a name="data_table_id_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableIdInput"></a>

```python
data_table_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `row_time_to_live_input`<sup>Optional</sup> <a name="row_time_to_live_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.rowTimeToLiveInput"></a>

```python
row_time_to_live_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleChronicleDataTableRowTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a>

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_table_id`<sup>Required</sup> <a name="data_table_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.dataTableId"></a>

```python
data_table_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `row_time_to_live`<sup>Required</sup> <a name="row_time_to_live" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.rowTimeToLive"></a>

```python
row_time_to_live: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataTableRowConfig <a name="GoogleChronicleDataTableRowConfig" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table_row

googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_table_id: str,
  instance: str,
  location: str,
  values: typing.List[str],
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  row_time_to_live: str = None,
  timeouts: GoogleChronicleDataTableRowTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.dataTableId">data_table_id</a></code> | <code>str</code> | The ID of the parent DataTable. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.instance">instance</a></code> | <code>str</code> | The Chronicle instance ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.location">location</a></code> | <code>str</code> | The GCP location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.values">values</a></code> | <code>typing.List[str]</code> | All column values for a single row. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#id GoogleChronicleDataTableRow#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#project GoogleChronicleDataTableRow#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.rowTimeToLive">row_time_to_live</a></code> | <code>str</code> | User-provided TTL of the data table row. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_table_id`<sup>Required</sup> <a name="data_table_id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.dataTableId"></a>

```python
data_table_id: str
```

- *Type:* str

The ID of the parent DataTable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#data_table_id GoogleChronicleDataTableRow#data_table_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The Chronicle instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#instance GoogleChronicleDataTableRow#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The GCP location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#location GoogleChronicleDataTableRow#location}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

All column values for a single row.

The values should be in the same order
as the columns of the data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#values GoogleChronicleDataTableRow#values}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#deletion_policy GoogleChronicleDataTableRow#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#id GoogleChronicleDataTableRow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#project GoogleChronicleDataTableRow#project}.

---

##### `row_time_to_live`<sup>Optional</sup> <a name="row_time_to_live" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.rowTimeToLive"></a>

```python
row_time_to_live: str
```

- *Type:* str

User-provided TTL of the data table row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#row_time_to_live GoogleChronicleDataTableRow#row_time_to_live}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleDataTableRowTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#timeouts GoogleChronicleDataTableRow#timeouts}

---

### GoogleChronicleDataTableRowTimeouts <a name="GoogleChronicleDataTableRowTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table_row

googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#create GoogleChronicleDataTableRow#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#delete GoogleChronicleDataTableRow#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#update GoogleChronicleDataTableRow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#create GoogleChronicleDataTableRow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#delete GoogleChronicleDataTableRow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_chronicle_data_table_row#update GoogleChronicleDataTableRow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataTableRowTimeoutsOutputReference <a name="GoogleChronicleDataTableRowTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table_row

googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleDataTableRowTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataTableRow.GoogleChronicleDataTableRowTimeouts">GoogleChronicleDataTableRowTimeouts</a>

---



