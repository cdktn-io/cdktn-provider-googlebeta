# `googleBiglakeHiveTable` Submodule <a name="`googleBiglakeHiveTable` Submodule" id="@cdktn/provider-google-beta.googleBiglakeHiveTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeHiveTable <a name="GoogleBiglakeHiveTable" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table google_biglake_hive_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog: str,
  database: str,
  name: str,
  storage_descriptor: GoogleBiglakeHiveTableStorageDescriptor,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  partition_keys: IResolvable | typing.List[GoogleBiglakeHiveTablePartitionKeys] = None,
  project: str = None,
  timeouts: GoogleBiglakeHiveTableTimeouts = None,
  view_expanded_text: str = None,
  view_original_text: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | The Hive catalog where the table is located. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.database">database</a></code> | <code>str</code> | The Hive database where the table is located. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor">GoogleBiglakeHiveTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#id GoogleBiglakeHiveTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Additional parameters associated with the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.partitionKeys">partition_keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>]</code> | partition_keys block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#project GoogleBiglakeHiveTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts">GoogleBiglakeHiveTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | Expanded view text for Hive views. Empty for non-view. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.viewOriginalText">view_original_text</a></code> | <code>str</code> | Original view text for Hive views. Empty for non-view. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.catalog"></a>

- *Type:* str

The Hive catalog where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#catalog GoogleBiglakeHiveTable#catalog}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.database"></a>

- *Type:* str

The Hive database where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#database GoogleBiglakeHiveTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.name"></a>

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.storageDescriptor"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor">GoogleBiglakeHiveTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#storage_descriptor GoogleBiglakeHiveTable#storage_descriptor}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#deletion_policy GoogleBiglakeHiveTable#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.description"></a>

- *Type:* str

Description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#description GoogleBiglakeHiveTable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#id GoogleBiglakeHiveTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Additional parameters associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#parameters GoogleBiglakeHiveTable#parameters}

---

##### `partition_keys`<sup>Optional</sup> <a name="partition_keys" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.partitionKeys"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>]

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#partition_keys GoogleBiglakeHiveTable#partition_keys}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#project GoogleBiglakeHiveTable#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts">GoogleBiglakeHiveTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#timeouts GoogleBiglakeHiveTable#timeouts}

---

##### `view_expanded_text`<sup>Optional</sup> <a name="view_expanded_text" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.viewExpandedText"></a>

- *Type:* str

Expanded view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#view_expanded_text GoogleBiglakeHiveTable#view_expanded_text}

---

##### `view_original_text`<sup>Optional</sup> <a name="view_original_text" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.Initializer.parameter.viewOriginalText"></a>

- *Type:* str

Original view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#view_original_text GoogleBiglakeHiveTable#view_original_text}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putPartitionKeys">put_partition_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor">put_storage_descriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetPartitionKeys">reset_partition_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetViewExpandedText">reset_view_expanded_text</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetViewOriginalText">reset_view_original_text</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_partition_keys` <a name="put_partition_keys" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putPartitionKeys"></a>

```python
def put_partition_keys(
  value: IResolvable | typing.List[GoogleBiglakeHiveTablePartitionKeys]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putPartitionKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>]

---

##### `put_storage_descriptor` <a name="put_storage_descriptor" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor"></a>

```python
def put_storage_descriptor(
  columns: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorColumns],
  bucket_cols: typing.List[str] = None,
  compressed: bool | IResolvable = None,
  input_format: str = None,
  location_uri: str = None,
  num_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: typing.Mapping[str] = None,
  serde_info: GoogleBiglakeHiveTableStorageDescriptorSerdeInfo = None,
  skewed_info: GoogleBiglakeHiveTableStorageDescriptorSkewedInfo = None,
  sort_cols: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSortCols] = None,
  stored_as_sub_dirs: bool | IResolvable = None
) -> None
```

###### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.columns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a>]

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#columns GoogleBiglakeHiveTable#columns}

---

###### `bucket_cols`<sup>Optional</sup> <a name="bucket_cols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.bucketCols"></a>

- *Type:* typing.List[str]

Reducer grouping columns, clustering columns, and bucketing columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#bucket_cols GoogleBiglakeHiveTable#bucket_cols}

---

###### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.compressed"></a>

- *Type:* bool | cdktn.IResolvable

Whether the table data is compressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#compressed GoogleBiglakeHiveTable#compressed}

---

###### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.inputFormat"></a>

- *Type:* str

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#input_format GoogleBiglakeHiveTable#input_format}

---

###### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.locationUri"></a>

- *Type:* str

The Cloud Storage URI where the table data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#location_uri GoogleBiglakeHiveTable#location_uri}

---

###### `num_buckets`<sup>Optional</sup> <a name="num_buckets" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.numBuckets"></a>

- *Type:* typing.Union[int, float]

The number of buckets in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#num_buckets GoogleBiglakeHiveTable#num_buckets}

---

###### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.outputFormat"></a>

- *Type:* str

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#output_format GoogleBiglakeHiveTable#output_format}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Key-value pairs for the storage descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#parameters GoogleBiglakeHiveTable#parameters}

---

###### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.serdeInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo">GoogleBiglakeHiveTableStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#serde_info GoogleBiglakeHiveTable#serde_info}

---

###### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.skewedInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo">GoogleBiglakeHiveTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#skewed_info GoogleBiglakeHiveTable#skewed_info}

---

###### `sort_cols`<sup>Optional</sup> <a name="sort_cols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.sortCols"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a>]

sort_cols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#sort_cols GoogleBiglakeHiveTable#sort_cols}

---

###### `stored_as_sub_dirs`<sup>Optional</sup> <a name="stored_as_sub_dirs" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putStorageDescriptor.parameter.storedAsSubDirs"></a>

- *Type:* bool | cdktn.IResolvable

Whether the table is stored as sub directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#stored_as_sub_dirs GoogleBiglakeHiveTable#stored_as_sub_dirs}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#create GoogleBiglakeHiveTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#delete GoogleBiglakeHiveTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#update GoogleBiglakeHiveTable#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_partition_keys` <a name="reset_partition_keys" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetPartitionKeys"></a>

```python
def reset_partition_keys() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_view_expanded_text` <a name="reset_view_expanded_text" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetViewExpandedText"></a>

```python
def reset_view_expanded_text() -> None
```

##### `reset_view_original_text` <a name="reset_view_original_text" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.resetViewOriginalText"></a>

```python
def reset_view_original_text() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleBiglakeHiveTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleBiglakeHiveTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBiglakeHiveTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBiglakeHiveTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeHiveTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.lastAccessTime">last_access_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.partitionKeys">partition_keys</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList">GoogleBiglakeHiveTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference">GoogleBiglakeHiveTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.tableType">table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference">GoogleBiglakeHiveTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.partitionKeysInput">partition_keys_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.storageDescriptorInput">storage_descriptor_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor">GoogleBiglakeHiveTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts">GoogleBiglakeHiveTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.viewExpandedTextInput">view_expanded_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.viewOriginalTextInput">view_original_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `last_access_time`<sup>Required</sup> <a name="last_access_time" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.lastAccessTime"></a>

```python
last_access_time: str
```

- *Type:* str

---

##### `partition_keys`<sup>Required</sup> <a name="partition_keys" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.partitionKeys"></a>

```python
partition_keys: GoogleBiglakeHiveTablePartitionKeysList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList">GoogleBiglakeHiveTablePartitionKeysList</a>

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.storageDescriptor"></a>

```python
storage_descriptor: GoogleBiglakeHiveTableStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference">GoogleBiglakeHiveTableStorageDescriptorOutputReference</a>

---

##### `table_type`<sup>Required</sup> <a name="table_type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.timeouts"></a>

```python
timeouts: GoogleBiglakeHiveTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference">GoogleBiglakeHiveTableTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition_keys_input`<sup>Optional</sup> <a name="partition_keys_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.partitionKeysInput"></a>

```python
partition_keys_input: IResolvable | typing.List[GoogleBiglakeHiveTablePartitionKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `storage_descriptor_input`<sup>Optional</sup> <a name="storage_descriptor_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.storageDescriptorInput"></a>

```python
storage_descriptor_input: GoogleBiglakeHiveTableStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor">GoogleBiglakeHiveTableStorageDescriptor</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleBiglakeHiveTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts">GoogleBiglakeHiveTableTimeouts</a>

---

##### `view_expanded_text_input`<sup>Optional</sup> <a name="view_expanded_text_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.viewExpandedTextInput"></a>

```python
view_expanded_text_input: str
```

- *Type:* str

---

##### `view_original_text_input`<sup>Optional</sup> <a name="view_original_text_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.viewOriginalTextInput"></a>

```python
view_original_text_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `view_expanded_text`<sup>Required</sup> <a name="view_expanded_text" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

---

##### `view_original_text`<sup>Required</sup> <a name="view_original_text" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeHiveTableConfig <a name="GoogleBiglakeHiveTableConfig" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog: str,
  database: str,
  name: str,
  storage_descriptor: GoogleBiglakeHiveTableStorageDescriptor,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  partition_keys: IResolvable | typing.List[GoogleBiglakeHiveTablePartitionKeys] = None,
  project: str = None,
  timeouts: GoogleBiglakeHiveTableTimeouts = None,
  view_expanded_text: str = None,
  view_original_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.catalog">catalog</a></code> | <code>str</code> | The Hive catalog where the table is located. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.database">database</a></code> | <code>str</code> | The Hive database where the table is located. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.name">name</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor">GoogleBiglakeHiveTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.description">description</a></code> | <code>str</code> | Description of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#id GoogleBiglakeHiveTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Additional parameters associated with the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.partitionKeys">partition_keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>]</code> | partition_keys block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#project GoogleBiglakeHiveTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts">GoogleBiglakeHiveTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | Expanded view text for Hive views. Empty for non-view. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | Original view text for Hive views. Empty for non-view. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The Hive catalog where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#catalog GoogleBiglakeHiveTable#catalog}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The Hive database where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#database GoogleBiglakeHiveTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.storageDescriptor"></a>

```python
storage_descriptor: GoogleBiglakeHiveTableStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor">GoogleBiglakeHiveTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#storage_descriptor GoogleBiglakeHiveTable#storage_descriptor}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#deletion_policy GoogleBiglakeHiveTable#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#description GoogleBiglakeHiveTable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#id GoogleBiglakeHiveTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional parameters associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#parameters GoogleBiglakeHiveTable#parameters}

---

##### `partition_keys`<sup>Optional</sup> <a name="partition_keys" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.partitionKeys"></a>

```python
partition_keys: IResolvable | typing.List[GoogleBiglakeHiveTablePartitionKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>]

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#partition_keys GoogleBiglakeHiveTable#partition_keys}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#project GoogleBiglakeHiveTable#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.timeouts"></a>

```python
timeouts: GoogleBiglakeHiveTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts">GoogleBiglakeHiveTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#timeouts GoogleBiglakeHiveTable#timeouts}

---

##### `view_expanded_text`<sup>Optional</sup> <a name="view_expanded_text" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

Expanded view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#view_expanded_text GoogleBiglakeHiveTable#view_expanded_text}

---

##### `view_original_text`<sup>Optional</sup> <a name="view_original_text" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableConfig.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

Original view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#view_original_text GoogleBiglakeHiveTable#view_original_text}

---

### GoogleBiglakeHiveTablePartitionKeys <a name="GoogleBiglakeHiveTablePartitionKeys" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys(
  name: str,
  type: str,
  comment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys.property.name">name</a></code> | <code>str</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys.property.type">type</a></code> | <code>str</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys.property.comment">comment</a></code> | <code>str</code> | Comment of the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#type GoogleBiglakeHiveTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys.property.comment"></a>

```python
comment: str
```

- *Type:* str

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#comment GoogleBiglakeHiveTable#comment}

---

### GoogleBiglakeHiveTableStorageDescriptor <a name="GoogleBiglakeHiveTableStorageDescriptor" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor(
  columns: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorColumns],
  bucket_cols: typing.List[str] = None,
  compressed: bool | IResolvable = None,
  input_format: str = None,
  location_uri: str = None,
  num_buckets: typing.Union[int, float] = None,
  output_format: str = None,
  parameters: typing.Mapping[str] = None,
  serde_info: GoogleBiglakeHiveTableStorageDescriptorSerdeInfo = None,
  skewed_info: GoogleBiglakeHiveTableStorageDescriptorSkewedInfo = None,
  sort_cols: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSortCols] = None,
  stored_as_sub_dirs: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.columns">columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a>]</code> | columns block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.bucketCols">bucket_cols</a></code> | <code>typing.List[str]</code> | Reducer grouping columns, clustering columns, and bucketing columns. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.compressed">compressed</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the table data is compressed. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.inputFormat">input_format</a></code> | <code>str</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.locationUri">location_uri</a></code> | <code>str</code> | The Cloud Storage URI where the table data is located. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.numBuckets">num_buckets</a></code> | <code>typing.Union[int, float]</code> | The number of buckets in the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.outputFormat">output_format</a></code> | <code>str</code> | The fully qualified Java class name of the output format. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Key-value pairs for the storage descriptor. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo">GoogleBiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | serde_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo">GoogleBiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.sortCols">sort_cols</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a>]</code> | sort_cols block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.storedAsSubDirs">stored_as_sub_dirs</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the table is stored as sub directories. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.columns"></a>

```python
columns: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a>]

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#columns GoogleBiglakeHiveTable#columns}

---

##### `bucket_cols`<sup>Optional</sup> <a name="bucket_cols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.bucketCols"></a>

```python
bucket_cols: typing.List[str]
```

- *Type:* typing.List[str]

Reducer grouping columns, clustering columns, and bucketing columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#bucket_cols GoogleBiglakeHiveTable#bucket_cols}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.compressed"></a>

```python
compressed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the table data is compressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#compressed GoogleBiglakeHiveTable#compressed}

---

##### `input_format`<sup>Optional</sup> <a name="input_format" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#input_format GoogleBiglakeHiveTable#input_format}

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

The Cloud Storage URI where the table data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#location_uri GoogleBiglakeHiveTable#location_uri}

---

##### `num_buckets`<sup>Optional</sup> <a name="num_buckets" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.numBuckets"></a>

```python
num_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of buckets in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#num_buckets GoogleBiglakeHiveTable#num_buckets}

---

##### `output_format`<sup>Optional</sup> <a name="output_format" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#output_format GoogleBiglakeHiveTable#output_format}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Key-value pairs for the storage descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#parameters GoogleBiglakeHiveTable#parameters}

---

##### `serde_info`<sup>Optional</sup> <a name="serde_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.serdeInfo"></a>

```python
serde_info: GoogleBiglakeHiveTableStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo">GoogleBiglakeHiveTableStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#serde_info GoogleBiglakeHiveTable#serde_info}

---

##### `skewed_info`<sup>Optional</sup> <a name="skewed_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.skewedInfo"></a>

```python
skewed_info: GoogleBiglakeHiveTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo">GoogleBiglakeHiveTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#skewed_info GoogleBiglakeHiveTable#skewed_info}

---

##### `sort_cols`<sup>Optional</sup> <a name="sort_cols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.sortCols"></a>

```python
sort_cols: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSortCols]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a>]

sort_cols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#sort_cols GoogleBiglakeHiveTable#sort_cols}

---

##### `stored_as_sub_dirs`<sup>Optional</sup> <a name="stored_as_sub_dirs" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor.property.storedAsSubDirs"></a>

```python
stored_as_sub_dirs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the table is stored as sub directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#stored_as_sub_dirs GoogleBiglakeHiveTable#stored_as_sub_dirs}

---

### GoogleBiglakeHiveTableStorageDescriptorColumns <a name="GoogleBiglakeHiveTableStorageDescriptorColumns" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns(
  name: str,
  type: str,
  comment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns.property.name">name</a></code> | <code>str</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns.property.type">type</a></code> | <code>str</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns.property.comment">comment</a></code> | <code>str</code> | Comment of the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#type GoogleBiglakeHiveTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#comment GoogleBiglakeHiveTable#comment}

---

### GoogleBiglakeHiveTableStorageDescriptorSerdeInfo <a name="GoogleBiglakeHiveTableStorageDescriptorSerdeInfo" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo(
  name: str,
  serialization_lib: str,
  description: str = None,
  deserializer_class: str = None,
  parameters: typing.Mapping[str] = None,
  serde_type: str = None,
  serializer_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.name">name</a></code> | <code>str</code> | Name of the SerDe, table name by default. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib">serialization_lib</a></code> | <code>str</code> | The fully qualified Java class name of the serialization library. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.description">description</a></code> | <code>str</code> | Description of the SerDe. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass">deserializer_class</a></code> | <code>str</code> | The fully qualified Java class name of the deserializer. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Parameters of the SerDe. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType">serde_type</a></code> | <code>str</code> | The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass">serializer_class</a></code> | <code>str</code> | The fully qualified Java class name of the serializer. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the SerDe, table name by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}

---

##### `serialization_lib`<sup>Required</sup> <a name="serialization_lib" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib"></a>

```python
serialization_lib: str
```

- *Type:* str

The fully qualified Java class name of the serialization library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#serialization_lib GoogleBiglakeHiveTable#serialization_lib}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#description GoogleBiglakeHiveTable#description}

---

##### `deserializer_class`<sup>Optional</sup> <a name="deserializer_class" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass"></a>

```python
deserializer_class: str
```

- *Type:* str

The fully qualified Java class name of the deserializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#deserializer_class GoogleBiglakeHiveTable#deserializer_class}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Parameters of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#parameters GoogleBiglakeHiveTable#parameters}

---

##### `serde_type`<sup>Optional</sup> <a name="serde_type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType"></a>

```python
serde_type: str
```

- *Type:* str

The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#serde_type GoogleBiglakeHiveTable#serde_type}

---

##### `serializer_class`<sup>Optional</sup> <a name="serializer_class" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass"></a>

```python
serializer_class: str
```

- *Type:* str

The fully qualified Java class name of the serializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#serializer_class GoogleBiglakeHiveTable#serializer_class}

---

### GoogleBiglakeHiveTableStorageDescriptorSkewedInfo <a name="GoogleBiglakeHiveTableStorageDescriptorSkewedInfo" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo(
  skewed_col_names: typing.List[str],
  skewed_col_values: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues],
  skewed_key_values_locations: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames">skewed_col_names</a></code> | <code>typing.List[str]</code> | The column names that are skewed. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues">skewed_col_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]</code> | skewed_col_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations">skewed_key_values_locations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]</code> | skewed_key_values_locations block. |

---

##### `skewed_col_names`<sup>Required</sup> <a name="skewed_col_names" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames"></a>

```python
skewed_col_names: typing.List[str]
```

- *Type:* typing.List[str]

The column names that are skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#skewed_col_names GoogleBiglakeHiveTable#skewed_col_names}

---

##### `skewed_col_values`<sup>Required</sup> <a name="skewed_col_values" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues"></a>

```python
skewed_col_values: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

skewed_col_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#skewed_col_values GoogleBiglakeHiveTable#skewed_col_values}

---

##### `skewed_key_values_locations`<sup>Required</sup> <a name="skewed_key_values_locations" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations"></a>

```python
skewed_key_values_locations: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

skewed_key_values_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#skewed_key_values_locations GoogleBiglakeHiveTable#skewed_key_values_locations}

---

### GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues <a name="GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#values GoogleBiglakeHiveTable#values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#values GoogleBiglakeHiveTable#values}.

---

### GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations <a name="GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations(
  location: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#location GoogleBiglakeHiveTable#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#values GoogleBiglakeHiveTable#values}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#location GoogleBiglakeHiveTable#location}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#values GoogleBiglakeHiveTable#values}.

---

### GoogleBiglakeHiveTableStorageDescriptorSortCols <a name="GoogleBiglakeHiveTableStorageDescriptorSortCols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols(
  col: str,
  order: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols.property.col">col</a></code> | <code>str</code> | The column name. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Sort order: 1 for Ascending, 0 for Descending. |

---

##### `col`<sup>Required</sup> <a name="col" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols.property.col"></a>

```python
col: str
```

- *Type:* str

The column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#col GoogleBiglakeHiveTable#col}

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sort order: 1 for Ascending, 0 for Descending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#order GoogleBiglakeHiveTable#order}

---

### GoogleBiglakeHiveTableTimeouts <a name="GoogleBiglakeHiveTableTimeouts" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#create GoogleBiglakeHiveTable#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#delete GoogleBiglakeHiveTable#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#update GoogleBiglakeHiveTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#create GoogleBiglakeHiveTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#delete GoogleBiglakeHiveTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#update GoogleBiglakeHiveTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeHiveTablePartitionKeysList <a name="GoogleBiglakeHiveTablePartitionKeysList" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBiglakeHiveTablePartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleBiglakeHiveTablePartitionKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>]

---


### GoogleBiglakeHiveTablePartitionKeysOutputReference <a name="GoogleBiglakeHiveTablePartitionKeysOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.resetComment">reset_comment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBiglakeHiveTablePartitionKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTablePartitionKeys">GoogleBiglakeHiveTablePartitionKeys</a>

---


### GoogleBiglakeHiveTableStorageDescriptorColumnsList <a name="GoogleBiglakeHiveTableStorageDescriptorColumnsList" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a>]

---


### GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference <a name="GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBiglakeHiveTableStorageDescriptorColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a>

---


### GoogleBiglakeHiveTableStorageDescriptorOutputReference <a name="GoogleBiglakeHiveTableStorageDescriptorOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo">put_serde_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo">put_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSortCols">put_sort_cols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols">reset_bucket_cols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetCompressed">reset_compressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat">reset_input_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri">reset_location_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets">reset_num_buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat">reset_output_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo">reset_serde_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo">reset_skewed_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetSortCols">reset_sort_cols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs">reset_stored_as_sub_dirs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putColumns"></a>

```python
def put_columns(
  value: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a>]

---

##### `put_serde_info` <a name="put_serde_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo"></a>

```python
def put_serde_info(
  name: str,
  serialization_lib: str,
  description: str = None,
  deserializer_class: str = None,
  parameters: typing.Mapping[str] = None,
  serde_type: str = None,
  serializer_class: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.name"></a>

- *Type:* str

Name of the SerDe, table name by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#name GoogleBiglakeHiveTable#name}

---

###### `serialization_lib`<sup>Required</sup> <a name="serialization_lib" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.serializationLib"></a>

- *Type:* str

The fully qualified Java class name of the serialization library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#serialization_lib GoogleBiglakeHiveTable#serialization_lib}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.description"></a>

- *Type:* str

Description of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#description GoogleBiglakeHiveTable#description}

---

###### `deserializer_class`<sup>Optional</sup> <a name="deserializer_class" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.deserializerClass"></a>

- *Type:* str

The fully qualified Java class name of the deserializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#deserializer_class GoogleBiglakeHiveTable#deserializer_class}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Parameters of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#parameters GoogleBiglakeHiveTable#parameters}

---

###### `serde_type`<sup>Optional</sup> <a name="serde_type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.serdeType"></a>

- *Type:* str

The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#serde_type GoogleBiglakeHiveTable#serde_type}

---

###### `serializer_class`<sup>Optional</sup> <a name="serializer_class" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.serializerClass"></a>

- *Type:* str

The fully qualified Java class name of the serializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#serializer_class GoogleBiglakeHiveTable#serializer_class}

---

##### `put_skewed_info` <a name="put_skewed_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```python
def put_skewed_info(
  skewed_col_names: typing.List[str],
  skewed_col_values: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues],
  skewed_key_values_locations: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
) -> None
```

###### `skewed_col_names`<sup>Required</sup> <a name="skewed_col_names" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColNames"></a>

- *Type:* typing.List[str]

The column names that are skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#skewed_col_names GoogleBiglakeHiveTable#skewed_col_names}

---

###### `skewed_col_values`<sup>Required</sup> <a name="skewed_col_values" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedColValues"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

skewed_col_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#skewed_col_values GoogleBiglakeHiveTable#skewed_col_values}

---

###### `skewed_key_values_locations`<sup>Required</sup> <a name="skewed_key_values_locations" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.skewedKeyValuesLocations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

skewed_key_values_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_hive_table#skewed_key_values_locations GoogleBiglakeHiveTable#skewed_key_values_locations}

---

##### `put_sort_cols` <a name="put_sort_cols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSortCols"></a>

```python
def put_sort_cols(
  value: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSortCols]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.putSortCols.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a>]

---

##### `reset_bucket_cols` <a name="reset_bucket_cols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols"></a>

```python
def reset_bucket_cols() -> None
```

##### `reset_compressed` <a name="reset_compressed" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetCompressed"></a>

```python
def reset_compressed() -> None
```

##### `reset_input_format` <a name="reset_input_format" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat"></a>

```python
def reset_input_format() -> None
```

##### `reset_location_uri` <a name="reset_location_uri" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri"></a>

```python
def reset_location_uri() -> None
```

##### `reset_num_buckets` <a name="reset_num_buckets" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets"></a>

```python
def reset_num_buckets() -> None
```

##### `reset_output_format` <a name="reset_output_format" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```python
def reset_output_format() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_serde_info` <a name="reset_serde_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo"></a>

```python
def reset_serde_info() -> None
```

##### `reset_skewed_info` <a name="reset_skewed_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```python
def reset_skewed_info() -> None
```

##### `reset_sort_cols` <a name="reset_sort_cols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetSortCols"></a>

```python
def reset_sort_cols() -> None
```

##### `reset_stored_as_sub_dirs` <a name="reset_stored_as_sub_dirs" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs"></a>

```python
def reset_stored_as_sub_dirs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList">GoogleBiglakeHiveTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.sortCols">sort_cols</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList">GoogleBiglakeHiveTableStorageDescriptorSortColsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput">bucket_cols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput">columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput">compressed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput">input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput">num_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput">output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput">serde_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo">GoogleBiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput">skewed_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo">GoogleBiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput">sort_cols_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput">stored_as_sub_dirs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols">bucket_cols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets">num_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs">stored_as_sub_dirs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor">GoogleBiglakeHiveTableStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.columns"></a>

```python
columns: GoogleBiglakeHiveTableStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumnsList">GoogleBiglakeHiveTableStorageDescriptorColumnsList</a>

---

##### `serde_info`<sup>Required</sup> <a name="serde_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo"></a>

```python
serde_info: GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewed_info`<sup>Required</sup> <a name="skewed_info" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```python
skewed_info: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sort_cols`<sup>Required</sup> <a name="sort_cols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.sortCols"></a>

```python
sort_cols: GoogleBiglakeHiveTableStorageDescriptorSortColsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList">GoogleBiglakeHiveTableStorageDescriptorSortColsList</a>

---

##### `bucket_cols_input`<sup>Optional</sup> <a name="bucket_cols_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput"></a>

```python
bucket_cols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput"></a>

```python
columns_input: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorColumns">GoogleBiglakeHiveTableStorageDescriptorColumns</a>]

---

##### `compressed_input`<sup>Optional</sup> <a name="compressed_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput"></a>

```python
compressed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_format_input`<sup>Optional</sup> <a name="input_format_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```python
input_format_input: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `num_buckets_input`<sup>Optional</sup> <a name="num_buckets_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput"></a>

```python
num_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format_input`<sup>Optional</sup> <a name="output_format_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```python
output_format_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serde_info_input`<sup>Optional</sup> <a name="serde_info_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```python
serde_info_input: GoogleBiglakeHiveTableStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo">GoogleBiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `skewed_info_input`<sup>Optional</sup> <a name="skewed_info_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```python
skewed_info_input: GoogleBiglakeHiveTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo">GoogleBiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `sort_cols_input`<sup>Optional</sup> <a name="sort_cols_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput"></a>

```python
sort_cols_input: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSortCols]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a>]

---

##### `stored_as_sub_dirs_input`<sup>Optional</sup> <a name="stored_as_sub_dirs_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput"></a>

```python
stored_as_sub_dirs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bucket_cols`<sup>Required</sup> <a name="bucket_cols" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols"></a>

```python
bucket_cols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.compressed"></a>

```python
compressed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `num_buckets`<sup>Required</sup> <a name="num_buckets" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets"></a>

```python
num_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `stored_as_sub_dirs`<sup>Required</sup> <a name="stored_as_sub_dirs" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs"></a>

```python
stored_as_sub_dirs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeHiveTableStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptor">GoogleBiglakeHiveTableStorageDescriptor</a>

---


### GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference <a name="GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass">reset_deserializer_class</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType">reset_serde_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass">reset_serializer_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_deserializer_class` <a name="reset_deserializer_class" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass"></a>

```python
def reset_deserializer_class() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_serde_type` <a name="reset_serde_type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType"></a>

```python
def reset_serde_type() -> None
```

##### `reset_serializer_class` <a name="reset_serializer_class" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass"></a>

```python
def reset_serializer_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput">deserializer_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput">serde_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput">serialization_lib_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput">serializer_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass">deserializer_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType">serde_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib">serialization_lib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass">serializer_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo">GoogleBiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `deserializer_class_input`<sup>Optional</sup> <a name="deserializer_class_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput"></a>

```python
deserializer_class_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serde_type_input`<sup>Optional</sup> <a name="serde_type_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput"></a>

```python
serde_type_input: str
```

- *Type:* str

---

##### `serialization_lib_input`<sup>Optional</sup> <a name="serialization_lib_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput"></a>

```python
serialization_lib_input: str
```

- *Type:* str

---

##### `serializer_class_input`<sup>Optional</sup> <a name="serializer_class_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput"></a>

```python
serializer_class_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `deserializer_class`<sup>Required</sup> <a name="deserializer_class" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass"></a>

```python
deserializer_class: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `serde_type`<sup>Required</sup> <a name="serde_type" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType"></a>

```python
serde_type: str
```

- *Type:* str

---

##### `serialization_lib`<sup>Required</sup> <a name="serialization_lib" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib"></a>

```python
serialization_lib: str
```

- *Type:* str

---

##### `serializer_class`<sup>Required</sup> <a name="serializer_class" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass"></a>

```python
serializer_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeHiveTableStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSerdeInfo">GoogleBiglakeHiveTableStorageDescriptorSerdeInfo</a>

---


### GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference <a name="GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues">put_skewed_col_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations">put_skewed_key_values_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_skewed_col_values` <a name="put_skewed_col_values" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues"></a>

```python
def put_skewed_col_values(
  value: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

---

##### `put_skewed_key_values_locations` <a name="put_skewed_key_values_locations" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations"></a>

```python
def put_skewed_key_values_locations(
  value: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues">skewed_col_values</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations">skewed_key_values_locations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput">skewed_col_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput">skewed_col_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput">skewed_key_values_locations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames">skewed_col_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo">GoogleBiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skewed_col_values`<sup>Required</sup> <a name="skewed_col_values" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues"></a>

```python
skewed_col_values: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a>

---

##### `skewed_key_values_locations`<sup>Required</sup> <a name="skewed_key_values_locations" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations"></a>

```python
skewed_key_values_locations: GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a>

---

##### `skewed_col_names_input`<sup>Optional</sup> <a name="skewed_col_names_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput"></a>

```python
skewed_col_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_col_values_input`<sup>Optional</sup> <a name="skewed_col_values_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput"></a>

```python
skewed_col_values_input: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

---

##### `skewed_key_values_locations_input`<sup>Optional</sup> <a name="skewed_key_values_locations_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput"></a>

```python
skewed_key_values_locations_input: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

---

##### `skewed_col_names`<sup>Required</sup> <a name="skewed_col_names" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames"></a>

```python
skewed_col_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeHiveTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfo">GoogleBiglakeHiveTableStorageDescriptorSkewedInfo</a>

---


### GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList <a name="GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>]

---


### GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference <a name="GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues</a>

---


### GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList <a name="GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>]

---


### GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference <a name="GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations">GoogleBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations</a>

---


### GoogleBiglakeHiveTableStorageDescriptorSortColsList <a name="GoogleBiglakeHiveTableStorageDescriptorSortColsList" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleBiglakeHiveTableStorageDescriptorSortCols]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a>]

---


### GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference <a name="GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput">col_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col">col</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `col_input`<sup>Optional</sup> <a name="col_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput"></a>

```python
col_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `col`<sup>Required</sup> <a name="col" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col"></a>

```python
col: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBiglakeHiveTableStorageDescriptorSortCols
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableStorageDescriptorSortCols">GoogleBiglakeHiveTableStorageDescriptorSortCols</a>

---


### GoogleBiglakeHiveTableTimeoutsOutputReference <a name="GoogleBiglakeHiveTableTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_hive_table

googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts">GoogleBiglakeHiveTableTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBiglakeHiveTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeHiveTable.GoogleBiglakeHiveTableTimeouts">GoogleBiglakeHiveTableTimeouts</a>

---



