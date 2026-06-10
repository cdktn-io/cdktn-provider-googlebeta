# `googleChronicleDataTable` Submodule <a name="`googleChronicleDataTable` Submodule" id="@cdktn/provider-google-beta.googleChronicleDataTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataTable <a name="GoogleChronicleDataTable" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table google_chronicle_data_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTable(
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
  description: str,
  instance: str,
  location: str,
  column_info: IResolvable | typing.List[GoogleChronicleDataTableColumnInfo] = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  row_time_to_live: str = None,
  scope_info: GoogleChronicleDataTableScopeInfo = None,
  timeouts: GoogleChronicleDataTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.dataTableId">data_table_id</a></code> | <code>str</code> | The ID to use for the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.description">description</a></code> | <code>str</code> | A user-provided description of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.columnInfo">column_info</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>]</code> | column_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#id GoogleChronicleDataTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#project GoogleChronicleDataTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.rowTimeToLive">row_time_to_live</a></code> | <code>str</code> | User-provided TTL of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.scopeInfo">scope_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a></code> | scope_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_table_id`<sup>Required</sup> <a name="data_table_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.dataTableId"></a>

- *Type:* str

The ID to use for the data table.

This is also the display name for
the data table. It must satisfy the following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#data_table_id GoogleChronicleDataTable#data_table_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.description"></a>

- *Type:* str

A user-provided description of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#description GoogleChronicleDataTable#description}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#instance GoogleChronicleDataTable#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#location GoogleChronicleDataTable#location}

---

##### `column_info`<sup>Optional</sup> <a name="column_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.columnInfo"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>]

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#column_info GoogleChronicleDataTable#column_info}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#deletion_policy GoogleChronicleDataTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#id GoogleChronicleDataTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#project GoogleChronicleDataTable#project}.

---

##### `row_time_to_live`<sup>Optional</sup> <a name="row_time_to_live" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.rowTimeToLive"></a>

- *Type:* str

User-provided TTL of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#row_time_to_live GoogleChronicleDataTable#row_time_to_live}

---

##### `scope_info`<sup>Optional</sup> <a name="scope_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.scopeInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a>

scope_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#scope_info GoogleChronicleDataTable#scope_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#timeouts GoogleChronicleDataTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putColumnInfo">put_column_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putScopeInfo">put_scope_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetColumnInfo">reset_column_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetRowTimeToLive">reset_row_time_to_live</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetScopeInfo">reset_scope_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_column_info` <a name="put_column_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putColumnInfo"></a>

```python
def put_column_info(
  value: IResolvable | typing.List[GoogleChronicleDataTableColumnInfo]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putColumnInfo.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>]

---

##### `put_scope_info` <a name="put_scope_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putScopeInfo"></a>

```python
def put_scope_info(
  data_access_scopes: typing.List[str]
) -> None
```

###### `data_access_scopes`<sup>Required</sup> <a name="data_access_scopes" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putScopeInfo.parameter.dataAccessScopes"></a>

- *Type:* typing.List[str]

Contains the list of scope names of the data table.

If the list is empty,
the data table is treated as unscoped. The scope names should be
full resource names and should be of the format:
"projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope_name}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#data_access_scopes GoogleChronicleDataTable#data_access_scopes}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#create GoogleChronicleDataTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#delete GoogleChronicleDataTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#update GoogleChronicleDataTable#update}.

---

##### `reset_column_info` <a name="reset_column_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetColumnInfo"></a>

```python
def reset_column_info() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_row_time_to_live` <a name="reset_row_time_to_live" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetRowTimeToLive"></a>

```python
def reset_row_time_to_live() -> None
```

##### `reset_scope_info` <a name="reset_scope_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetScopeInfo"></a>

```python
def reset_scope_info() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleChronicleDataTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleChronicleDataTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleDataTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleDataTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.approximateRowCount">approximate_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.columnInfo">column_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList">GoogleChronicleDataTableColumnInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableUuid">data_table_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLiveUpdateTime">row_time_to_live_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.ruleAssociationsCount">rule_associations_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rules">rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.scopeInfo">scope_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference">GoogleChronicleDataTableScopeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference">GoogleChronicleDataTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.updateSource">update_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.columnInfoInput">column_info_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableIdInput">data_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLiveInput">row_time_to_live_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.scopeInfoInput">scope_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableId">data_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLive">row_time_to_live</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `approximate_row_count`<sup>Required</sup> <a name="approximate_row_count" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.approximateRowCount"></a>

```python
approximate_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_info`<sup>Required</sup> <a name="column_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.columnInfo"></a>

```python
column_info: GoogleChronicleDataTableColumnInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList">GoogleChronicleDataTableColumnInfoList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_table_uuid`<sup>Required</sup> <a name="data_table_uuid" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableUuid"></a>

```python
data_table_uuid: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `row_time_to_live_update_time`<sup>Required</sup> <a name="row_time_to_live_update_time" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLiveUpdateTime"></a>

```python
row_time_to_live_update_time: str
```

- *Type:* str

---

##### `rule_associations_count`<sup>Required</sup> <a name="rule_associations_count" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.ruleAssociationsCount"></a>

```python
rule_associations_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rules"></a>

```python
rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope_info`<sup>Required</sup> <a name="scope_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.scopeInfo"></a>

```python
scope_info: GoogleChronicleDataTableScopeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference">GoogleChronicleDataTableScopeInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.timeouts"></a>

```python
timeouts: GoogleChronicleDataTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference">GoogleChronicleDataTableTimeoutsOutputReference</a>

---

##### `update_source`<sup>Required</sup> <a name="update_source" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.updateSource"></a>

```python
update_source: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `column_info_input`<sup>Optional</sup> <a name="column_info_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.columnInfoInput"></a>

```python
column_info_input: IResolvable | typing.List[GoogleChronicleDataTableColumnInfo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>]

---

##### `data_table_id_input`<sup>Optional</sup> <a name="data_table_id_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableIdInput"></a>

```python
data_table_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `row_time_to_live_input`<sup>Optional</sup> <a name="row_time_to_live_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLiveInput"></a>

```python
row_time_to_live_input: str
```

- *Type:* str

---

##### `scope_info_input`<sup>Optional</sup> <a name="scope_info_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.scopeInfoInput"></a>

```python
scope_info_input: GoogleChronicleDataTableScopeInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleChronicleDataTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a>

---

##### `data_table_id`<sup>Required</sup> <a name="data_table_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.dataTableId"></a>

```python
data_table_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `row_time_to_live`<sup>Required</sup> <a name="row_time_to_live" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.rowTimeToLive"></a>

```python
row_time_to_live: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataTableColumnInfo <a name="GoogleChronicleDataTableColumnInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTableColumnInfo(
  column_index: typing.Union[int, float],
  original_column: str,
  column_type: str = None,
  key_column: bool | IResolvable = None,
  mapped_column_path: str = None,
  repeated_values: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.columnIndex">column_index</a></code> | <code>typing.Union[int, float]</code> | Column Index. 0,1,2... |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.originalColumn">original_column</a></code> | <code>str</code> | Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads). |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.columnType">column_type</a></code> | <code>str</code> | Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.keyColumn">key_column</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to include this column in the calculation of the row ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.mappedColumnPath">mapped_column_path</a></code> | <code>str</code> | Entity proto field path that the column is mapped to. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.repeatedValues">repeated_values</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the column is a repeated values column. |

---

##### `column_index`<sup>Required</sup> <a name="column_index" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.columnIndex"></a>

```python
column_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Column Index. 0,1,2...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#column_index GoogleChronicleDataTable#column_index}

---

##### `original_column`<sup>Required</sup> <a name="original_column" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.originalColumn"></a>

```python
original_column: str
```

- *Type:* str

Original column name of the Data Table (present in the CSV header in case of creation of data tables using file uploads).

It must satisfy the
following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#original_column GoogleChronicleDataTable#original_column}

---

##### `column_type`<sup>Optional</sup> <a name="column_type" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

Column type can be STRING, CIDR (Ex- 10.1.1.0/24), REGEX Possible values: STRING REGEX CIDR NUMBER Possible values: ["STRING", "REGEX", "CIDR", "NUMBER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#column_type GoogleChronicleDataTable#column_type}

---

##### `key_column`<sup>Optional</sup> <a name="key_column" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.keyColumn"></a>

```python
key_column: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to include this column in the calculation of the row ID.

If no columns have key_column = true, all columns will be included in the
calculation of the row ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#key_column GoogleChronicleDataTable#key_column}

---

##### `mapped_column_path`<sup>Optional</sup> <a name="mapped_column_path" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.mappedColumnPath"></a>

```python
mapped_column_path: str
```

- *Type:* str

Entity proto field path that the column is mapped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#mapped_column_path GoogleChronicleDataTable#mapped_column_path}

---

##### `repeated_values`<sup>Optional</sup> <a name="repeated_values" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo.property.repeatedValues"></a>

```python
repeated_values: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the column is a repeated values column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#repeated_values GoogleChronicleDataTable#repeated_values}

---

### GoogleChronicleDataTableConfig <a name="GoogleChronicleDataTableConfig" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_table_id: str,
  description: str,
  instance: str,
  location: str,
  column_info: IResolvable | typing.List[GoogleChronicleDataTableColumnInfo] = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  row_time_to_live: str = None,
  scope_info: GoogleChronicleDataTableScopeInfo = None,
  timeouts: GoogleChronicleDataTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.dataTableId">data_table_id</a></code> | <code>str</code> | The ID to use for the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.description">description</a></code> | <code>str</code> | A user-provided description of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.columnInfo">column_info</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>]</code> | column_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#id GoogleChronicleDataTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#project GoogleChronicleDataTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.rowTimeToLive">row_time_to_live</a></code> | <code>str</code> | User-provided TTL of the data table. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.scopeInfo">scope_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a></code> | scope_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_table_id`<sup>Required</sup> <a name="data_table_id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.dataTableId"></a>

```python
data_table_id: str
```

- *Type:* str

The ID to use for the data table.

This is also the display name for
the data table. It must satisfy the following requirements:

* Starts with letter.
* Contains only letters, numbers and underscore.
* Must be unique and has length < 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#data_table_id GoogleChronicleDataTable#data_table_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A user-provided description of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#description GoogleChronicleDataTable#description}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#instance GoogleChronicleDataTable#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#location GoogleChronicleDataTable#location}

---

##### `column_info`<sup>Optional</sup> <a name="column_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.columnInfo"></a>

```python
column_info: IResolvable | typing.List[GoogleChronicleDataTableColumnInfo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>]

column_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#column_info GoogleChronicleDataTable#column_info}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/chronicle_data_table.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#deletion_policy GoogleChronicleDataTable#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#id GoogleChronicleDataTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#project GoogleChronicleDataTable#project}.

---

##### `row_time_to_live`<sup>Optional</sup> <a name="row_time_to_live" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.rowTimeToLive"></a>

```python
row_time_to_live: str
```

- *Type:* str

User-provided TTL of the data table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#row_time_to_live GoogleChronicleDataTable#row_time_to_live}

---

##### `scope_info`<sup>Optional</sup> <a name="scope_info" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.scopeInfo"></a>

```python
scope_info: GoogleChronicleDataTableScopeInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a>

scope_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#scope_info GoogleChronicleDataTable#scope_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleDataTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#timeouts GoogleChronicleDataTable#timeouts}

---

### GoogleChronicleDataTableScopeInfo <a name="GoogleChronicleDataTableScopeInfo" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTableScopeInfo(
  data_access_scopes: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo.property.dataAccessScopes">data_access_scopes</a></code> | <code>typing.List[str]</code> | Contains the list of scope names of the data table. |

---

##### `data_access_scopes`<sup>Required</sup> <a name="data_access_scopes" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo.property.dataAccessScopes"></a>

```python
data_access_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Contains the list of scope names of the data table.

If the list is empty,
the data table is treated as unscoped. The scope names should be
full resource names and should be of the format:
"projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope_name}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#data_access_scopes GoogleChronicleDataTable#data_access_scopes}

---

### GoogleChronicleDataTableTimeouts <a name="GoogleChronicleDataTableTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#create GoogleChronicleDataTable#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#delete GoogleChronicleDataTable#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#update GoogleChronicleDataTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#create GoogleChronicleDataTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#delete GoogleChronicleDataTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_data_table#update GoogleChronicleDataTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataTableColumnInfoList <a name="GoogleChronicleDataTableColumnInfoList" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleDataTableColumnInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleChronicleDataTableColumnInfo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>]

---


### GoogleChronicleDataTableColumnInfoOutputReference <a name="GoogleChronicleDataTableColumnInfoOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetColumnType">reset_column_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetKeyColumn">reset_key_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath">reset_mapped_column_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetRepeatedValues">reset_repeated_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_type` <a name="reset_column_type" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetColumnType"></a>

```python
def reset_column_type() -> None
```

##### `reset_key_column` <a name="reset_key_column" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetKeyColumn"></a>

```python
def reset_key_column() -> None
```

##### `reset_mapped_column_path` <a name="reset_mapped_column_path" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetMappedColumnPath"></a>

```python
def reset_mapped_column_path() -> None
```

##### `reset_repeated_values` <a name="reset_repeated_values" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.resetRepeatedValues"></a>

```python
def reset_repeated_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnIndexInput">column_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnTypeInput">column_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.keyColumnInput">key_column_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput">mapped_column_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.originalColumnInput">original_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput">repeated_values_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnIndex">column_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnType">column_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.keyColumn">key_column</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath">mapped_column_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.originalColumn">original_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.repeatedValues">repeated_values</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_index_input`<sup>Optional</sup> <a name="column_index_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnIndexInput"></a>

```python
column_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_type_input`<sup>Optional</sup> <a name="column_type_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnTypeInput"></a>

```python
column_type_input: str
```

- *Type:* str

---

##### `key_column_input`<sup>Optional</sup> <a name="key_column_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.keyColumnInput"></a>

```python
key_column_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mapped_column_path_input`<sup>Optional</sup> <a name="mapped_column_path_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.mappedColumnPathInput"></a>

```python
mapped_column_path_input: str
```

- *Type:* str

---

##### `original_column_input`<sup>Optional</sup> <a name="original_column_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.originalColumnInput"></a>

```python
original_column_input: str
```

- *Type:* str

---

##### `repeated_values_input`<sup>Optional</sup> <a name="repeated_values_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.repeatedValuesInput"></a>

```python
repeated_values_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `column_index`<sup>Required</sup> <a name="column_index" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnIndex"></a>

```python
column_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column_type`<sup>Required</sup> <a name="column_type" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

---

##### `key_column`<sup>Required</sup> <a name="key_column" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.keyColumn"></a>

```python
key_column: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mapped_column_path`<sup>Required</sup> <a name="mapped_column_path" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.mappedColumnPath"></a>

```python
mapped_column_path: str
```

- *Type:* str

---

##### `original_column`<sup>Required</sup> <a name="original_column" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.originalColumn"></a>

```python
original_column: str
```

- *Type:* str

---

##### `repeated_values`<sup>Required</sup> <a name="repeated_values" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.repeatedValues"></a>

```python
repeated_values: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleDataTableColumnInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableColumnInfo">GoogleChronicleDataTableColumnInfo</a>

---


### GoogleChronicleDataTableScopeInfoOutputReference <a name="GoogleChronicleDataTableScopeInfoOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput">data_access_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes">data_access_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_access_scopes_input`<sup>Optional</sup> <a name="data_access_scopes_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.dataAccessScopesInput"></a>

```python
data_access_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_access_scopes`<sup>Required</sup> <a name="data_access_scopes" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.dataAccessScopes"></a>

```python
data_access_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleDataTableScopeInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableScopeInfo">GoogleChronicleDataTableScopeInfo</a>

---


### GoogleChronicleDataTableTimeoutsOutputReference <a name="GoogleChronicleDataTableTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_table

googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleDataTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataTable.GoogleChronicleDataTableTimeouts">GoogleChronicleDataTableTimeouts</a>

---



