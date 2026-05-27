# `dataGoogleFirebaseHostingChannel` Submodule <a name="`dataGoogleFirebaseHostingChannel` Submodule" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirebaseHostingChannel <a name="DataGoogleFirebaseHostingChannel" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel google_firebase_hosting_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_firebase_hosting_channel

dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_id: str,
  site_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.channelId">channel_id</a></code> | <code>str</code> | Required. Immutable. A unique ID within the site that identifies the channel. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | Required. The ID of the site in which to create this channel. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel#id DataGoogleFirebaseHostingChannel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.channelId"></a>

- *Type:* str

Required. Immutable. A unique ID within the site that identifies the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel#channel_id DataGoogleFirebaseHostingChannel#channel_id}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.siteId"></a>

- *Type:* str

Required. The ID of the site in which to create this channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel#site_id DataGoogleFirebaseHostingChannel#site_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel#id DataGoogleFirebaseHostingChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleFirebaseHostingChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isConstruct"></a>

```python
from cdktn_provider_google_beta import data_google_firebase_hosting_channel

dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import data_google_firebase_hosting_channel

dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformDataSource"></a>

```python
from cdktn_provider_google_beta import data_google_firebase_hosting_channel

dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import data_google_firebase_hosting_channel

dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleFirebaseHostingChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleFirebaseHostingChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleFirebaseHostingChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleFirebaseHostingChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.retainedReleaseCount">retained_release_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retained_release_count`<sup>Required</sup> <a name="retained_release_count" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.retainedReleaseCount"></a>

```python
retained_release_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirebaseHostingChannelConfig <a name="DataGoogleFirebaseHostingChannelConfig" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import data_google_firebase_hosting_channel

dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  channel_id: str,
  site_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.channelId">channel_id</a></code> | <code>str</code> | Required. Immutable. A unique ID within the site that identifies the channel. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.siteId">site_id</a></code> | <code>str</code> | Required. The ID of the site in which to create this channel. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel#id DataGoogleFirebaseHostingChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

Required. Immutable. A unique ID within the site that identifies the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel#channel_id DataGoogleFirebaseHostingChannel#channel_id}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

Required. The ID of the site in which to create this channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel#site_id DataGoogleFirebaseHostingChannel#site_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleFirebaseHostingChannel.DataGoogleFirebaseHostingChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_firebase_hosting_channel#id DataGoogleFirebaseHostingChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



