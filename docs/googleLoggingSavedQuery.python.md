# `googleLoggingSavedQuery` Submodule <a name="`googleLoggingSavedQuery` Submodule" id="@cdktn/provider-google-beta.googleLoggingSavedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingSavedQuery <a name="GoogleLoggingSavedQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query google_logging_saved_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQuery(
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
  location: str,
  name: str,
  parent: str,
  visibility: str,
  description: str = None,
  id: str = None,
  logging_query: GoogleLoggingSavedQueryLoggingQuery = None,
  ops_analytics_query: GoogleLoggingSavedQueryOpsAnalyticsQuery = None,
  timeouts: GoogleLoggingSavedQueryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.loggingQuery">logging_query</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.opsAnalyticsQuery">ops_analytics_query</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.displayName"></a>

- *Type:* str

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#display_name GoogleLoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#location GoogleLoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.name"></a>

- *Type:* str

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#name GoogleLoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#parent GoogleLoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.visibility"></a>

- *Type:* str

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#visibility GoogleLoggingSavedQuery#visibility}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.description"></a>

- *Type:* str

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#description GoogleLoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_query`<sup>Optional</sup> <a name="logging_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.loggingQuery"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#logging_query GoogleLoggingSavedQuery#logging_query}

---

##### `ops_analytics_query`<sup>Optional</sup> <a name="ops_analytics_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.opsAnalyticsQuery"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#ops_analytics_query GoogleLoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#timeouts GoogleLoggingSavedQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery">put_logging_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery">put_ops_analytics_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery">reset_logging_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery">reset_ops_analytics_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_logging_query` <a name="put_logging_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery"></a>

```python
def put_logging_query(
  filter: str,
  summary_field_end: typing.Union[int, float] = None,
  summary_fields: IResolvable | typing.List[GoogleLoggingSavedQueryLoggingQuerySummaryFields] = None,
  summary_field_start: typing.Union[int, float] = None
) -> None
```

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery.parameter.filter"></a>

- *Type:* str

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#filter GoogleLoggingSavedQuery#filter}

---

###### `summary_field_end`<sup>Optional</sup> <a name="summary_field_end" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery.parameter.summaryFieldEnd"></a>

- *Type:* typing.Union[int, float]

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#summary_field_end GoogleLoggingSavedQuery#summary_field_end}

---

###### `summary_fields`<sup>Optional</sup> <a name="summary_fields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery.parameter.summaryFields"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>]

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#summary_fields GoogleLoggingSavedQuery#summary_fields}

---

###### `summary_field_start`<sup>Optional</sup> <a name="summary_field_start" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery.parameter.summaryFieldStart"></a>

- *Type:* typing.Union[int, float]

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#summary_field_start GoogleLoggingSavedQuery#summary_field_start}

---

##### `put_ops_analytics_query` <a name="put_ops_analytics_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery"></a>

```python
def put_ops_analytics_query(
  sql_query_text: str
) -> None
```

###### `sql_query_text`<sup>Required</sup> <a name="sql_query_text" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery.parameter.sqlQueryText"></a>

- *Type:* str

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#sql_query_text GoogleLoggingSavedQuery#sql_query_text}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_query` <a name="reset_logging_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery"></a>

```python
def reset_logging_query() -> None
```

##### `reset_ops_analytics_query` <a name="reset_ops_analytics_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery"></a>

```python
def reset_ops_analytics_query() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQuery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleLoggingSavedQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleLoggingSavedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleLoggingSavedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery">logging_query</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery">ops_analytics_query</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput">logging_query_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput">ops_analytics_query_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `logging_query`<sup>Required</sup> <a name="logging_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery"></a>

```python
logging_query: GoogleLoggingSavedQueryLoggingQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a>

---

##### `ops_analytics_query`<sup>Required</sup> <a name="ops_analytics_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery"></a>

```python
ops_analytics_query: GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts"></a>

```python
timeouts: GoogleLoggingSavedQueryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_query_input`<sup>Optional</sup> <a name="logging_query_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput"></a>

```python
logging_query_input: GoogleLoggingSavedQueryLoggingQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ops_analytics_query_input`<sup>Optional</sup> <a name="ops_analytics_query_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput"></a>

```python
ops_analytics_query_input: GoogleLoggingSavedQueryOpsAnalyticsQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleLoggingSavedQueryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingSavedQueryConfig <a name="GoogleLoggingSavedQueryConfig" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  name: str,
  parent: str,
  visibility: str,
  description: str = None,
  id: str = None,
  logging_query: GoogleLoggingSavedQueryLoggingQuery = None,
  ops_analytics_query: GoogleLoggingSavedQueryOpsAnalyticsQuery = None,
  timeouts: GoogleLoggingSavedQueryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location">location</a></code> | <code>str</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name">name</a></code> | <code>str</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility">visibility</a></code> | <code>str</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description">description</a></code> | <code>str</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery">logging_query</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery">ops_analytics_query</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#display_name GoogleLoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#location GoogleLoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#name GoogleLoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#parent GoogleLoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#visibility GoogleLoggingSavedQuery#visibility}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#description GoogleLoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_query`<sup>Optional</sup> <a name="logging_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery"></a>

```python
logging_query: GoogleLoggingSavedQueryLoggingQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#logging_query GoogleLoggingSavedQuery#logging_query}

---

##### `ops_analytics_query`<sup>Optional</sup> <a name="ops_analytics_query" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery"></a>

```python
ops_analytics_query: GoogleLoggingSavedQueryOpsAnalyticsQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#ops_analytics_query GoogleLoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts"></a>

```python
timeouts: GoogleLoggingSavedQueryTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#timeouts GoogleLoggingSavedQuery#timeouts}

---

### GoogleLoggingSavedQueryLoggingQuery <a name="GoogleLoggingSavedQueryLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery(
  filter: str,
  summary_field_end: typing.Union[int, float] = None,
  summary_fields: IResolvable | typing.List[GoogleLoggingSavedQueryLoggingQuerySummaryFields] = None,
  summary_field_start: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter">filter</a></code> | <code>str</code> | An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd">summary_field_end</a></code> | <code>typing.Union[int, float]</code> | Characters will be counted from the end of the string. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields">summary_fields</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>]</code> | summary_fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart">summary_field_start</a></code> | <code>typing.Union[int, float]</code> | Characters will be counted from the start of the string. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter"></a>

```python
filter: str
```

- *Type:* str

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#filter GoogleLoggingSavedQuery#filter}

---

##### `summary_field_end`<sup>Optional</sup> <a name="summary_field_end" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd"></a>

```python
summary_field_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#summary_field_end GoogleLoggingSavedQuery#summary_field_end}

---

##### `summary_fields`<sup>Optional</sup> <a name="summary_fields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields"></a>

```python
summary_fields: IResolvable | typing.List[GoogleLoggingSavedQueryLoggingQuerySummaryFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>]

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#summary_fields GoogleLoggingSavedQuery#summary_fields}

---

##### `summary_field_start`<sup>Optional</sup> <a name="summary_field_start" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart"></a>

```python
summary_field_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#summary_field_start GoogleLoggingSavedQuery#summary_field_start}

---

### GoogleLoggingSavedQueryLoggingQuerySummaryFields <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields(
  field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field">field</a></code> | <code>str</code> | The field from the LogEntry to include in the summary line. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field"></a>

```python
field: str
```

- *Type:* str

The field from the LogEntry to include in the summary line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#field GoogleLoggingSavedQuery#field}

---

### GoogleLoggingSavedQueryOpsAnalyticsQuery <a name="GoogleLoggingSavedQueryOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery(
  sql_query_text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText">sql_query_text</a></code> | <code>str</code> | A logs analytics SQL query, which generally follows BigQuery format. |

---

##### `sql_query_text`<sup>Required</sup> <a name="sql_query_text" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText"></a>

```python
sql_query_text: str
```

- *Type:* str

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#sql_query_text GoogleLoggingSavedQuery#sql_query_text}

---

### GoogleLoggingSavedQueryTimeouts <a name="GoogleLoggingSavedQueryTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingSavedQueryLoggingQueryOutputReference <a name="GoogleLoggingSavedQueryLoggingQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields">put_summary_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd">reset_summary_field_end</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields">reset_summary_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart">reset_summary_field_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_summary_fields` <a name="put_summary_fields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields"></a>

```python
def put_summary_fields(
  value: IResolvable | typing.List[GoogleLoggingSavedQueryLoggingQuerySummaryFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>]

---

##### `reset_summary_field_end` <a name="reset_summary_field_end" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd"></a>

```python
def reset_summary_field_end() -> None
```

##### `reset_summary_fields` <a name="reset_summary_fields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields"></a>

```python
def reset_summary_fields() -> None
```

##### `reset_summary_field_start` <a name="reset_summary_field_start" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart"></a>

```python
def reset_summary_field_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields">summary_fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput">summary_field_end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput">summary_fields_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput">summary_field_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd">summary_field_end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart">summary_field_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `summary_fields`<sup>Required</sup> <a name="summary_fields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields"></a>

```python
summary_fields: GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `summary_field_end_input`<sup>Optional</sup> <a name="summary_field_end_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput"></a>

```python
summary_field_end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `summary_fields_input`<sup>Optional</sup> <a name="summary_fields_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput"></a>

```python
summary_fields_input: IResolvable | typing.List[GoogleLoggingSavedQueryLoggingQuerySummaryFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>]

---

##### `summary_field_start_input`<sup>Optional</sup> <a name="summary_field_start_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput"></a>

```python
summary_field_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `summary_field_end`<sup>Required</sup> <a name="summary_field_end" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd"></a>

```python
summary_field_end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `summary_field_start`<sup>Required</sup> <a name="summary_field_start" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart"></a>

```python
summary_field_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLoggingSavedQueryLoggingQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleLoggingSavedQueryLoggingQuerySummaryFields]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>]

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field` <a name="reset_field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleLoggingSavedQueryLoggingQuerySummaryFields
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>

---


### GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference <a name="GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput">sql_query_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText">sql_query_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_query_text_input`<sup>Optional</sup> <a name="sql_query_text_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput"></a>

```python
sql_query_text_input: str
```

- *Type:* str

---

##### `sql_query_text`<sup>Required</sup> <a name="sql_query_text" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText"></a>

```python
sql_query_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLoggingSavedQueryOpsAnalyticsQuery
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---


### GoogleLoggingSavedQueryTimeoutsOutputReference <a name="GoogleLoggingSavedQueryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_logging_saved_query

googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleLoggingSavedQueryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---



