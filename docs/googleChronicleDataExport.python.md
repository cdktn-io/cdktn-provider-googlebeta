# `googleChronicleDataExport` Submodule <a name="`googleChronicleDataExport` Submodule" id="@cdktn/provider-google-beta.googleChronicleDataExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataExport <a name="GoogleChronicleDataExport" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export google_chronicle_data_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExport(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  end_time: str,
  gcs_bucket: str,
  instance: str,
  location: str,
  start_time: str,
  id: str = None,
  include_log_types: typing.List[str] = None,
  ingestion_labels: IResolvable | typing.List[GoogleChronicleDataExportIngestionLabels] = None,
  namespaces: typing.List[str] = None,
  project: str = None,
  timeouts: GoogleChronicleDataExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | Last, exclusive time from the range. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.gcsBucket">gcs_bucket</a></code> | <code>str</code> | Link to the destination Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Start, inclusive time from the range. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#id GoogleChronicleDataExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.includeLogTypes">include_log_types</a></code> | <code>typing.List[str]</code> | The specific log types to include in the Data Export request. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.ingestionLabels">ingestion_labels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>]</code> | ingestion_labels block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | The namespaces used to filter the export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#project GoogleChronicleDataExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.endTime"></a>

- *Type:* str

Last, exclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#end_time GoogleChronicleDataExport#end_time}

---

##### `gcs_bucket`<sup>Required</sup> <a name="gcs_bucket" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.gcsBucket"></a>

- *Type:* str

Link to the destination Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#gcs_bucket GoogleChronicleDataExport#gcs_bucket}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.instance"></a>

- *Type:* str

The unique identifier for the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#instance GoogleChronicleDataExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#location GoogleChronicleDataExport#location}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.startTime"></a>

- *Type:* str

Start, inclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#start_time GoogleChronicleDataExport#start_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#id GoogleChronicleDataExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_log_types`<sup>Optional</sup> <a name="include_log_types" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.includeLogTypes"></a>

- *Type:* typing.List[str]

The specific log types to include in the Data Export request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#include_log_types GoogleChronicleDataExport#include_log_types}

---

##### `ingestion_labels`<sup>Optional</sup> <a name="ingestion_labels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.ingestionLabels"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>]

ingestion_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#ingestion_labels GoogleChronicleDataExport#ingestion_labels}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.namespaces"></a>

- *Type:* typing.List[str]

The namespaces used to filter the export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#namespaces GoogleChronicleDataExport#namespaces}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#project GoogleChronicleDataExport#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#timeouts GoogleChronicleDataExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putIngestionLabels">put_ingestion_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIncludeLogTypes">reset_include_log_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIngestionLabels">reset_ingestion_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetNamespaces">reset_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ingestion_labels` <a name="put_ingestion_labels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putIngestionLabels"></a>

```python
def put_ingestion_labels(
  value: IResolvable | typing.List[GoogleChronicleDataExportIngestionLabels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putIngestionLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#create GoogleChronicleDataExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#delete GoogleChronicleDataExport#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_log_types` <a name="reset_include_log_types" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIncludeLogTypes"></a>

```python
def reset_include_log_types() -> None
```

##### `reset_ingestion_labels` <a name="reset_ingestion_labels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIngestionLabels"></a>

```python
def reset_ingestion_labels() -> None
```

##### `reset_namespaces` <a name="reset_namespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetNamespaces"></a>

```python
def reset_namespaces() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleChronicleDataExport resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleChronicleDataExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleChronicleDataExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleChronicleDataExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportId">data_export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportStatus">data_export_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList">GoogleChronicleDataExportDataExportStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.estimatedVolume">estimated_volume</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.exportedVolume">exported_volume</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabels">ingestion_labels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList">GoogleChronicleDataExportIngestionLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference">GoogleChronicleDataExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucketInput">gcs_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypesInput">include_log_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabelsInput">ingestion_labels_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespacesInput">namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypes">include_log_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_export_id`<sup>Required</sup> <a name="data_export_id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportId"></a>

```python
data_export_id: str
```

- *Type:* str

---

##### `data_export_status`<sup>Required</sup> <a name="data_export_status" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportStatus"></a>

```python
data_export_status: GoogleChronicleDataExportDataExportStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList">GoogleChronicleDataExportDataExportStatusList</a>

---

##### `estimated_volume`<sup>Required</sup> <a name="estimated_volume" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.estimatedVolume"></a>

```python
estimated_volume: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exported_volume`<sup>Required</sup> <a name="exported_volume" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.exportedVolume"></a>

```python
exported_volume: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingestion_labels`<sup>Required</sup> <a name="ingestion_labels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabels"></a>

```python
ingestion_labels: GoogleChronicleDataExportIngestionLabelsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList">GoogleChronicleDataExportIngestionLabelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeouts"></a>

```python
timeouts: GoogleChronicleDataExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference">GoogleChronicleDataExportTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `gcs_bucket_input`<sup>Optional</sup> <a name="gcs_bucket_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucketInput"></a>

```python
gcs_bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_log_types_input`<sup>Optional</sup> <a name="include_log_types_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypesInput"></a>

```python
include_log_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingestion_labels_input`<sup>Optional</sup> <a name="ingestion_labels_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabelsInput"></a>

```python
ingestion_labels_input: IResolvable | typing.List[GoogleChronicleDataExportIngestionLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>]

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespacesInput"></a>

```python
namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleChronicleDataExportTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `gcs_bucket`<sup>Required</sup> <a name="gcs_bucket" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_log_types`<sup>Required</sup> <a name="include_log_types" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypes"></a>

```python
include_log_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataExportConfig <a name="GoogleChronicleDataExportConfig" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExportConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  end_time: str,
  gcs_bucket: str,
  instance: str,
  location: str,
  start_time: str,
  id: str = None,
  include_log_types: typing.List[str] = None,
  ingestion_labels: IResolvable | typing.List[GoogleChronicleDataExportIngestionLabels] = None,
  namespaces: typing.List[str] = None,
  project: str = None,
  timeouts: GoogleChronicleDataExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.endTime">end_time</a></code> | <code>str</code> | Last, exclusive time from the range. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | Link to the destination Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.startTime">start_time</a></code> | <code>str</code> | Start, inclusive time from the range. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#id GoogleChronicleDataExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.includeLogTypes">include_log_types</a></code> | <code>typing.List[str]</code> | The specific log types to include in the Data Export request. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.ingestionLabels">ingestion_labels</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>]</code> | ingestion_labels block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.namespaces">namespaces</a></code> | <code>typing.List[str]</code> | The namespaces used to filter the export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#project GoogleChronicleDataExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Last, exclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#end_time GoogleChronicleDataExport#end_time}

---

##### `gcs_bucket`<sup>Required</sup> <a name="gcs_bucket" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

Link to the destination Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#gcs_bucket GoogleChronicleDataExport#gcs_bucket}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The unique identifier for the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#instance GoogleChronicleDataExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#location GoogleChronicleDataExport#location}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Start, inclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#start_time GoogleChronicleDataExport#start_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#id GoogleChronicleDataExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_log_types`<sup>Optional</sup> <a name="include_log_types" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.includeLogTypes"></a>

```python
include_log_types: typing.List[str]
```

- *Type:* typing.List[str]

The specific log types to include in the Data Export request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#include_log_types GoogleChronicleDataExport#include_log_types}

---

##### `ingestion_labels`<sup>Optional</sup> <a name="ingestion_labels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.ingestionLabels"></a>

```python
ingestion_labels: IResolvable | typing.List[GoogleChronicleDataExportIngestionLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>]

ingestion_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#ingestion_labels GoogleChronicleDataExport#ingestion_labels}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.namespaces"></a>

```python
namespaces: typing.List[str]
```

- *Type:* typing.List[str]

The namespaces used to filter the export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#namespaces GoogleChronicleDataExport#namespaces}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#project GoogleChronicleDataExport#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.timeouts"></a>

```python
timeouts: GoogleChronicleDataExportTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#timeouts GoogleChronicleDataExport#timeouts}

---

### GoogleChronicleDataExportDataExportStatus <a name="GoogleChronicleDataExportDataExportStatus" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus()
```


### GoogleChronicleDataExportIngestionLabels <a name="GoogleChronicleDataExportIngestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.key">key</a></code> | <code>str</code> | The key. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.value">value</a></code> | <code>str</code> | The value. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.key"></a>

```python
key: str
```

- *Type:* str

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#key GoogleChronicleDataExport#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.value"></a>

```python
value: str
```

- *Type:* str

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#value GoogleChronicleDataExport#value}

---

### GoogleChronicleDataExportTimeouts <a name="GoogleChronicleDataExportTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExportTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#create GoogleChronicleDataExport#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#delete GoogleChronicleDataExport#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#create GoogleChronicleDataExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_data_export#delete GoogleChronicleDataExport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataExportDataExportStatusList <a name="GoogleChronicleDataExportDataExportStatusList" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleDataExportDataExportStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleChronicleDataExportDataExportStatusOutputReference <a name="GoogleChronicleDataExportDataExportStatusOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.dataRbacFiltered">data_rbac_filtered</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.exportedGlobPatterns">exported_glob_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus">GoogleChronicleDataExportDataExportStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_rbac_filtered`<sup>Required</sup> <a name="data_rbac_filtered" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.dataRbacFiltered"></a>

```python
data_rbac_filtered: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `exported_glob_patterns`<sup>Required</sup> <a name="exported_glob_patterns" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.exportedGlobPatterns"></a>

```python
exported_glob_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleChronicleDataExportDataExportStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus">GoogleChronicleDataExportDataExportStatus</a>

---


### GoogleChronicleDataExportIngestionLabelsList <a name="GoogleChronicleDataExportIngestionLabelsList" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleChronicleDataExportIngestionLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleChronicleDataExportIngestionLabels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>]

---


### GoogleChronicleDataExportIngestionLabelsOutputReference <a name="GoogleChronicleDataExportIngestionLabelsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleDataExportIngestionLabels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels">GoogleChronicleDataExportIngestionLabels</a>

---


### GoogleChronicleDataExportTimeoutsOutputReference <a name="GoogleChronicleDataExportTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_chronicle_data_export

googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleChronicleDataExportTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

---



