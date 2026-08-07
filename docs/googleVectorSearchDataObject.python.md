# `googleVectorSearchDataObject` Submodule <a name="`googleVectorSearchDataObject` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchDataObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchDataObject <a name="GoogleVectorSearchDataObject" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object google_vector_search_data_object}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObject(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  data_object_id: str,
  location: str,
  data: str = None,
  deletion_policy: str = None,
  etag: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleVectorSearchDataObjectTimeouts = None,
  vectors: IResolvable | typing.List[GoogleVectorSearchDataObjectVectors] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.dataObjectId">data_object_id</a></code> | <code>str</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.data">data</a></code> | <code>str</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.etag">etag</a></code> | <code>str</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.vectors">vectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>]</code> | vectors block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.collectionId"></a>

- *Type:* str

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#collection_id GoogleVectorSearchDataObject#collection_id}

---

##### `data_object_id`<sup>Required</sup> <a name="data_object_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.dataObjectId"></a>

- *Type:* str

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#data_object_id GoogleVectorSearchDataObject#data_object_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#location GoogleVectorSearchDataObject#location}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.data"></a>

- *Type:* str

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#data GoogleVectorSearchDataObject#data}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#deletion_policy GoogleVectorSearchDataObject#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.etag"></a>

- *Type:* str

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#etag GoogleVectorSearchDataObject#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#timeouts GoogleVectorSearchDataObject#timeouts}

---

##### `vectors`<sup>Optional</sup> <a name="vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.vectors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>]

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#vectors GoogleVectorSearchDataObject#vectors}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors">put_vectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetVectors">reset_vectors</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}.

---

##### `put_vectors` <a name="put_vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors"></a>

```python
def put_vectors(
  value: IResolvable | typing.List[GoogleVectorSearchDataObjectVectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>]

---

##### `reset_data` <a name="reset_data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vectors` <a name="reset_vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetVectors"></a>

```python
def reset_vectors() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVectorSearchDataObject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVectorSearchDataObject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVectorSearchDataObject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVectorSearchDataObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchDataObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference">GoogleVectorSearchDataObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectors">vectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList">GoogleVectorSearchDataObjectVectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectIdInput">data_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectorsInput">vectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectId">data_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeouts"></a>

```python
timeouts: GoogleVectorSearchDataObjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference">GoogleVectorSearchDataObjectTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `vectors`<sup>Required</sup> <a name="vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectors"></a>

```python
vectors: GoogleVectorSearchDataObjectVectorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList">GoogleVectorSearchDataObjectVectorsList</a>

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `data_object_id_input`<sup>Optional</sup> <a name="data_object_id_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectIdInput"></a>

```python
data_object_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVectorSearchDataObjectTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

---

##### `vectors_input`<sup>Optional</sup> <a name="vectors_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectorsInput"></a>

```python
vectors_input: IResolvable | typing.List[GoogleVectorSearchDataObjectVectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `data_object_id`<sup>Required</sup> <a name="data_object_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectId"></a>

```python
data_object_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchDataObjectConfig <a name="GoogleVectorSearchDataObjectConfig" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_id: str,
  data_object_id: str,
  location: str,
  data: str = None,
  deletion_policy: str = None,
  etag: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleVectorSearchDataObjectTimeouts = None,
  vectors: IResolvable | typing.List[GoogleVectorSearchDataObjectVectors] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dataObjectId">data_object_id</a></code> | <code>str</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.data">data</a></code> | <code>str</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.etag">etag</a></code> | <code>str</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.vectors">vectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>]</code> | vectors block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#collection_id GoogleVectorSearchDataObject#collection_id}

---

##### `data_object_id`<sup>Required</sup> <a name="data_object_id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dataObjectId"></a>

```python
data_object_id: str
```

- *Type:* str

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#data_object_id GoogleVectorSearchDataObject#data_object_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#location GoogleVectorSearchDataObject#location}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.data"></a>

```python
data: str
```

- *Type:* str

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#data GoogleVectorSearchDataObject#data}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#deletion_policy GoogleVectorSearchDataObject#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#etag GoogleVectorSearchDataObject#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.timeouts"></a>

```python
timeouts: GoogleVectorSearchDataObjectTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#timeouts GoogleVectorSearchDataObject#timeouts}

---

##### `vectors`<sup>Optional</sup> <a name="vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.vectors"></a>

```python
vectors: IResolvable | typing.List[GoogleVectorSearchDataObjectVectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>]

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#vectors GoogleVectorSearchDataObject#vectors}

---

### GoogleVectorSearchDataObjectTimeouts <a name="GoogleVectorSearchDataObjectTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}.

---

### GoogleVectorSearchDataObjectVectors <a name="GoogleVectorSearchDataObjectVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors(
  field_name: str,
  dense: GoogleVectorSearchDataObjectVectorsDense = None,
  sparse: GoogleVectorSearchDataObjectVectorsSparse = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#field_name GoogleVectorSearchDataObject#field_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.dense">dense</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | dense block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.sparse">sparse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | sparse block. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#field_name GoogleVectorSearchDataObject#field_name}.

---

##### `dense`<sup>Optional</sup> <a name="dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.dense"></a>

```python
dense: GoogleVectorSearchDataObjectVectorsDense
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

dense block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#dense GoogleVectorSearchDataObject#dense}

---

##### `sparse`<sup>Optional</sup> <a name="sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.sparse"></a>

```python
sparse: GoogleVectorSearchDataObjectVectorsSparse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

sparse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#sparse GoogleVectorSearchDataObject#sparse}

---

### GoogleVectorSearchDataObjectVectorsDense <a name="GoogleVectorSearchDataObjectVectorsDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense(
  values: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The float values of the dense vector. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The float values of the dense vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

### GoogleVectorSearchDataObjectVectorsSparse <a name="GoogleVectorSearchDataObjectVectorsSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse(
  indices: typing.List[typing.Union[int, float]],
  values: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.indices">indices</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The indices corresponding to the entries in 'values'. Must have the same length as 'values'. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The non-zero float values of the sparse vector. |

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.indices"></a>

```python
indices: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The indices corresponding to the entries in 'values'. Must have the same length as 'values'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#indices GoogleVectorSearchDataObject#indices}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The non-zero float values of the sparse vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchDataObjectTimeoutsOutputReference <a name="GoogleVectorSearchDataObjectTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVectorSearchDataObjectTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

---


### GoogleVectorSearchDataObjectVectorsDenseOutputReference <a name="GoogleVectorSearchDataObjectVectorsDenseOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVectorSearchDataObjectVectorsDense
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---


### GoogleVectorSearchDataObjectVectorsList <a name="GoogleVectorSearchDataObjectVectorsList" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVectorSearchDataObjectVectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleVectorSearchDataObjectVectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>]

---


### GoogleVectorSearchDataObjectVectorsOutputReference <a name="GoogleVectorSearchDataObjectVectorsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense">put_dense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse">put_sparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetDense">reset_dense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetSparse">reset_sparse</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dense` <a name="put_dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense"></a>

```python
def put_dense(
  values: typing.List[typing.Union[int, float]]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense.parameter.values"></a>

- *Type:* typing.List[typing.Union[int, float]]

The float values of the dense vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

##### `put_sparse` <a name="put_sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse"></a>

```python
def put_sparse(
  indices: typing.List[typing.Union[int, float]],
  values: typing.List[typing.Union[int, float]]
) -> None
```

###### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse.parameter.indices"></a>

- *Type:* typing.List[typing.Union[int, float]]

The indices corresponding to the entries in 'values'. Must have the same length as 'values'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#indices GoogleVectorSearchDataObject#indices}

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse.parameter.values"></a>

- *Type:* typing.List[typing.Union[int, float]]

The non-zero float values of the sparse vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

##### `reset_dense` <a name="reset_dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetDense"></a>

```python
def reset_dense() -> None
```

##### `reset_sparse` <a name="reset_sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetSparse"></a>

```python
def reset_sparse() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.dense">dense</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference">GoogleVectorSearchDataObjectVectorsDenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparse">sparse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference">GoogleVectorSearchDataObjectVectorsSparseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.denseInput">dense_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparseInput">sparse_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dense`<sup>Required</sup> <a name="dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.dense"></a>

```python
dense: GoogleVectorSearchDataObjectVectorsDenseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference">GoogleVectorSearchDataObjectVectorsDenseOutputReference</a>

---

##### `sparse`<sup>Required</sup> <a name="sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparse"></a>

```python
sparse: GoogleVectorSearchDataObjectVectorsSparseOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference">GoogleVectorSearchDataObjectVectorsSparseOutputReference</a>

---

##### `dense_input`<sup>Optional</sup> <a name="dense_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.denseInput"></a>

```python
dense_input: GoogleVectorSearchDataObjectVectorsDense
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `sparse_input`<sup>Optional</sup> <a name="sparse_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparseInput"></a>

```python
sparse_input: GoogleVectorSearchDataObjectVectorsSparse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVectorSearchDataObjectVectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>

---


### GoogleVectorSearchDataObjectVectorsSparseOutputReference <a name="GoogleVectorSearchDataObjectVectorsSparseOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vector_search_data_object

googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput">indices_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indices">indices</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `indices_input`<sup>Optional</sup> <a name="indices_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput"></a>

```python
indices_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indices"></a>

```python
indices: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVectorSearchDataObjectVectorsSparse
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---



