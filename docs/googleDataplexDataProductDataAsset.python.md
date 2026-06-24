# `googleDataplexDataProductDataAsset` Submodule <a name="`googleDataplexDataProductDataAsset` Submodule" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDataProductDataAsset <a name="GoogleDataplexDataProductDataAsset" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset google_dataplex_data_product_data_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_asset_id: str,
  data_product_id: str,
  location: str,
  resource: str,
  access_group_configs: IResolvable | typing.List[GoogleDataplexDataProductDataAssetAccessGroupConfigs] = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDataplexDataProductDataAssetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dataAssetId">data_asset_id</a></code> | <code>str</code> | The ID of the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dataProductId">data_product_id</a></code> | <code>str</code> | The ID of the parent data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.resource">resource</a></code> | <code>str</code> | Full resource name of the cloud resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.accessGroupConfigs">access_group_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>]</code> | access_group_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_asset_id`<sup>Required</sup> <a name="data_asset_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dataAssetId"></a>

- *Type:* str

The ID of the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#data_asset_id GoogleDataplexDataProductDataAsset#data_asset_id}

---

##### `data_product_id`<sup>Required</sup> <a name="data_product_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.dataProductId"></a>

- *Type:* str

The ID of the parent data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#data_product_id GoogleDataplexDataProductDataAsset#data_product_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.location"></a>

- *Type:* str

The location for the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#location GoogleDataplexDataProductDataAsset#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.resource"></a>

- *Type:* str

Full resource name of the cloud resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#resource GoogleDataplexDataProductDataAsset#resource}

---

##### `access_group_configs`<sup>Optional</sup> <a name="access_group_configs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.accessGroupConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>]

access_group_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#access_group_configs GoogleDataplexDataProductDataAsset#access_group_configs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#deletion_policy GoogleDataplexDataProductDataAsset#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#labels GoogleDataplexDataProductDataAsset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#timeouts GoogleDataplexDataProductDataAsset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs">put_access_group_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetAccessGroupConfigs">reset_access_group_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_group_configs` <a name="put_access_group_configs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs"></a>

```python
def put_access_group_configs(
  value: IResolvable | typing.List[GoogleDataplexDataProductDataAssetAccessGroupConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putAccessGroupConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#create GoogleDataplexDataProductDataAsset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#delete GoogleDataplexDataProductDataAsset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#update GoogleDataplexDataProductDataAsset#update}.

---

##### `reset_access_group_configs` <a name="reset_access_group_configs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetAccessGroupConfigs"></a>

```python
def reset_access_group_configs() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDataplexDataProductDataAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataplexDataProductDataAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataplexDataProductDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDataProductDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigs">access_group_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList">GoogleDataplexDataProductDataAssetAccessGroupConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference">GoogleDataplexDataProductDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigsInput">access_group_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetIdInput">data_asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductIdInput">data_product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetId">data_asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductId">data_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resource">resource</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_group_configs`<sup>Required</sup> <a name="access_group_configs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigs"></a>

```python
access_group_configs: GoogleDataplexDataProductDataAssetAccessGroupConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList">GoogleDataplexDataProductDataAssetAccessGroupConfigsList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeouts"></a>

```python
timeouts: GoogleDataplexDataProductDataAssetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference">GoogleDataplexDataProductDataAssetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `access_group_configs_input`<sup>Optional</sup> <a name="access_group_configs_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.accessGroupConfigsInput"></a>

```python
access_group_configs_input: IResolvable | typing.List[GoogleDataplexDataProductDataAssetAccessGroupConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>]

---

##### `data_asset_id_input`<sup>Optional</sup> <a name="data_asset_id_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetIdInput"></a>

```python
data_asset_id_input: str
```

- *Type:* str

---

##### `data_product_id_input`<sup>Optional</sup> <a name="data_product_id_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductIdInput"></a>

```python
data_product_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDataplexDataProductDataAssetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---

##### `data_asset_id`<sup>Required</sup> <a name="data_asset_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataAssetId"></a>

```python
data_asset_id: str
```

- *Type:* str

---

##### `data_product_id`<sup>Required</sup> <a name="data_product_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.dataProductId"></a>

```python
data_product_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDataProductDataAssetAccessGroupConfigs <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs(
  access_group: str,
  iam_roles: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup">access_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#access_group GoogleDataplexDataProductDataAsset#access_group}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | IAM roles granted on the resource. |

---

##### `access_group`<sup>Required</sup> <a name="access_group" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.accessGroup"></a>

```python
access_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#access_group GoogleDataplexDataProductDataAsset#access_group}.

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

IAM roles granted on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#iam_roles GoogleDataplexDataProductDataAsset#iam_roles}

---

### GoogleDataplexDataProductDataAssetConfig <a name="GoogleDataplexDataProductDataAssetConfig" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_asset_id: str,
  data_product_id: str,
  location: str,
  resource: str,
  access_group_configs: IResolvable | typing.List[GoogleDataplexDataProductDataAssetAccessGroupConfigs] = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDataplexDataProductDataAssetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataAssetId">data_asset_id</a></code> | <code>str</code> | The ID of the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataProductId">data_product_id</a></code> | <code>str</code> | The ID of the parent data product. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.location">location</a></code> | <code>str</code> | The location for the data asset. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.resource">resource</a></code> | <code>str</code> | Full resource name of the cloud resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.accessGroupConfigs">access_group_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>]</code> | access_group_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_asset_id`<sup>Required</sup> <a name="data_asset_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataAssetId"></a>

```python
data_asset_id: str
```

- *Type:* str

The ID of the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#data_asset_id GoogleDataplexDataProductDataAsset#data_asset_id}

---

##### `data_product_id`<sup>Required</sup> <a name="data_product_id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.dataProductId"></a>

```python
data_product_id: str
```

- *Type:* str

The ID of the parent data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#data_product_id GoogleDataplexDataProductDataAsset#data_product_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the data asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#location GoogleDataplexDataProductDataAsset#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.resource"></a>

```python
resource: str
```

- *Type:* str

Full resource name of the cloud resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#resource GoogleDataplexDataProductDataAsset#resource}

---

##### `access_group_configs`<sup>Optional</sup> <a name="access_group_configs" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.accessGroupConfigs"></a>

```python
access_group_configs: IResolvable | typing.List[GoogleDataplexDataProductDataAssetAccessGroupConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>]

access_group_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#access_group_configs GoogleDataplexDataProductDataAsset#access_group_configs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#deletion_policy GoogleDataplexDataProductDataAsset#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#id GoogleDataplexDataProductDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#labels GoogleDataplexDataProductDataAsset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#project GoogleDataplexDataProductDataAsset#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetConfig.property.timeouts"></a>

```python
timeouts: GoogleDataplexDataProductDataAssetTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#timeouts GoogleDataplexDataProductDataAsset#timeouts}

---

### GoogleDataplexDataProductDataAssetTimeouts <a name="GoogleDataplexDataProductDataAssetTimeouts" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#create GoogleDataplexDataProductDataAsset#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#delete GoogleDataplexDataProductDataAsset#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#update GoogleDataplexDataProductDataAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#create GoogleDataplexDataProductDataAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#delete GoogleDataplexDataProductDataAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_data_product_data_asset#update GoogleDataplexDataProductDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDataProductDataAssetAccessGroupConfigsList <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigsList" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDataplexDataProductDataAssetAccessGroupConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>]

---


### GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference <a name="GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles">reset_iam_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iam_roles` <a name="reset_iam_roles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.resetIamRoles"></a>

```python
def reset_iam_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput">access_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput">iam_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup">access_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_group_input`<sup>Optional</sup> <a name="access_group_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroupInput"></a>

```python
access_group_input: str
```

- *Type:* str

---

##### `iam_roles_input`<sup>Optional</sup> <a name="iam_roles_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRolesInput"></a>

```python
iam_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_group`<sup>Required</sup> <a name="access_group" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.accessGroup"></a>

```python
access_group: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataplexDataProductDataAssetAccessGroupConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetAccessGroupConfigs">GoogleDataplexDataProductDataAssetAccessGroupConfigs</a>

---


### GoogleDataplexDataProductDataAssetTimeoutsOutputReference <a name="GoogleDataplexDataProductDataAssetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_dataplex_data_product_data_asset

googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDataplexDataProductDataAssetTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDataplexDataProductDataAsset.GoogleDataplexDataProductDataAssetTimeouts">GoogleDataplexDataProductDataAssetTimeouts</a>

---



