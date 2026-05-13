# `googleApigeeDeveloperApp` Submodule <a name="`googleApigeeDeveloperApp` Submodule" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeDeveloperApp <a name="GoogleApigeeDeveloperApp" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app google_apigee_developer_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperApp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  callback_url: str,
  developer_email: str,
  name: str,
  org_id: str,
  api_products: typing.List[str] = None,
  app_family: str = None,
  attributes: IResolvable | typing.List[GoogleApigeeDeveloperAppAttributes] = None,
  id: str = None,
  key_expires_in: str = None,
  scopes: typing.List[str] = None,
  status: str = None,
  timeouts: GoogleApigeeDeveloperAppTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.callbackUrl">callback_url</a></code> | <code>str</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.developerEmail">developer_email</a></code> | <code>str</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.apiProducts">api_products</a></code> | <code>typing.List[str]</code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.appFamily">app_family</a></code> | <code>str</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.attributes">attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>]</code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.keyExpiresIn">key_expires_in</a></code> | <code>str</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scopes">scopes</a></code> | <code>typing.List[str]</code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `callback_url`<sup>Required</sup> <a name="callback_url" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.callbackUrl"></a>

- *Type:* str

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#callback_url GoogleApigeeDeveloperApp#callback_url}

---

##### `developer_email`<sup>Required</sup> <a name="developer_email" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.developerEmail"></a>

- *Type:* str

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#developer_email GoogleApigeeDeveloperApp#developer_email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.name"></a>

- *Type:* str

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#name GoogleApigeeDeveloperApp#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#org_id GoogleApigeeDeveloperApp#org_id}

---

##### `api_products`<sup>Optional</sup> <a name="api_products" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.apiProducts"></a>

- *Type:* typing.List[str]

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#api_products GoogleApigeeDeveloperApp#api_products}

---

##### `app_family`<sup>Optional</sup> <a name="app_family" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.appFamily"></a>

- *Type:* str

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#app_family GoogleApigeeDeveloperApp#app_family}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.attributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#attributes GoogleApigeeDeveloperApp#attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_expires_in`<sup>Optional</sup> <a name="key_expires_in" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.keyExpiresIn"></a>

- *Type:* str

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#key_expires_in GoogleApigeeDeveloperApp#key_expires_in}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scopes"></a>

- *Type:* typing.List[str]

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#scopes GoogleApigeeDeveloperApp#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.status"></a>

- *Type:* str

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#status GoogleApigeeDeveloperApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#timeouts GoogleApigeeDeveloperApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetApiProducts">reset_api_products</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAppFamily">reset_app_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetKeyExpiresIn">reset_key_expires_in</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putAttributes"></a>

```python
def put_attributes(
  value: IResolvable | typing.List[GoogleApigeeDeveloperAppAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#create GoogleApigeeDeveloperApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#delete GoogleApigeeDeveloperApp#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#update GoogleApigeeDeveloperApp#update}.

---

##### `reset_api_products` <a name="reset_api_products" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetApiProducts"></a>

```python
def reset_api_products() -> None
```

##### `reset_app_family` <a name="reset_app_family" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAppFamily"></a>

```python
def reset_app_family() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_expires_in` <a name="reset_key_expires_in" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetKeyExpiresIn"></a>

```python
def reset_key_expires_in() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleApigeeDeveloperApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleApigeeDeveloperApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApigeeDeveloperApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApigeeDeveloperApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeDeveloperApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList">GoogleApigeeDeveloperAppAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList">GoogleApigeeDeveloperAppCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerId">developer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lastModifiedAt">last_modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference">GoogleApigeeDeveloperAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProductsInput">api_products_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamilyInput">app_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrlInput">callback_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmailInput">developer_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresInInput">key_expires_in_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProducts">api_products</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamily">app_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrl">callback_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmail">developer_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresIn">key_expires_in</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributes"></a>

```python
attributes: GoogleApigeeDeveloperAppAttributesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList">GoogleApigeeDeveloperAppAttributesList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.credentials"></a>

```python
credentials: GoogleApigeeDeveloperAppCredentialsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList">GoogleApigeeDeveloperAppCredentialsList</a>

---

##### `developer_id`<sup>Required</sup> <a name="developer_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerId"></a>

```python
developer_id: str
```

- *Type:* str

---

##### `last_modified_at`<sup>Required</sup> <a name="last_modified_at" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lastModifiedAt"></a>

```python
last_modified_at: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeouts"></a>

```python
timeouts: GoogleApigeeDeveloperAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference">GoogleApigeeDeveloperAppTimeoutsOutputReference</a>

---

##### `api_products_input`<sup>Optional</sup> <a name="api_products_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProductsInput"></a>

```python
api_products_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_family_input`<sup>Optional</sup> <a name="app_family_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamilyInput"></a>

```python
app_family_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributesInput"></a>

```python
attributes_input: IResolvable | typing.List[GoogleApigeeDeveloperAppAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>]

---

##### `callback_url_input`<sup>Optional</sup> <a name="callback_url_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrlInput"></a>

```python
callback_url_input: str
```

- *Type:* str

---

##### `developer_email_input`<sup>Optional</sup> <a name="developer_email_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmailInput"></a>

```python
developer_email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_expires_in_input`<sup>Optional</sup> <a name="key_expires_in_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresInInput"></a>

```python
key_expires_in_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleApigeeDeveloperAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

---

##### `api_products`<sup>Required</sup> <a name="api_products" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProducts"></a>

```python
api_products: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_family`<sup>Required</sup> <a name="app_family" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamily"></a>

```python
app_family: str
```

- *Type:* str

---

##### `callback_url`<sup>Required</sup> <a name="callback_url" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrl"></a>

```python
callback_url: str
```

- *Type:* str

---

##### `developer_email`<sup>Required</sup> <a name="developer_email" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmail"></a>

```python
developer_email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_expires_in`<sup>Required</sup> <a name="key_expires_in" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresIn"></a>

```python
key_expires_in: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeDeveloperAppAttributes <a name="GoogleApigeeDeveloperAppAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.name">name</a></code> | <code>str</code> | Key of the attribute. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.value">value</a></code> | <code>str</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.name"></a>

```python
name: str
```

- *Type:* str

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#name GoogleApigeeDeveloperApp#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#value GoogleApigeeDeveloperApp#value}

---

### GoogleApigeeDeveloperAppConfig <a name="GoogleApigeeDeveloperAppConfig" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  callback_url: str,
  developer_email: str,
  name: str,
  org_id: str,
  api_products: typing.List[str] = None,
  app_family: str = None,
  attributes: IResolvable | typing.List[GoogleApigeeDeveloperAppAttributes] = None,
  id: str = None,
  key_expires_in: str = None,
  scopes: typing.List[str] = None,
  status: str = None,
  timeouts: GoogleApigeeDeveloperAppTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.callbackUrl">callback_url</a></code> | <code>str</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.developerEmail">developer_email</a></code> | <code>str</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.name">name</a></code> | <code>str</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.apiProducts">api_products</a></code> | <code>typing.List[str]</code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.appFamily">app_family</a></code> | <code>str</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.attributes">attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>]</code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.keyExpiresIn">key_expires_in</a></code> | <code>str</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.status">status</a></code> | <code>str</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `callback_url`<sup>Required</sup> <a name="callback_url" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.callbackUrl"></a>

```python
callback_url: str
```

- *Type:* str

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#callback_url GoogleApigeeDeveloperApp#callback_url}

---

##### `developer_email`<sup>Required</sup> <a name="developer_email" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.developerEmail"></a>

```python
developer_email: str
```

- *Type:* str

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#developer_email GoogleApigeeDeveloperApp#developer_email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#name GoogleApigeeDeveloperApp#name}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#org_id GoogleApigeeDeveloperApp#org_id}

---

##### `api_products`<sup>Optional</sup> <a name="api_products" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.apiProducts"></a>

```python
api_products: typing.List[str]
```

- *Type:* typing.List[str]

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#api_products GoogleApigeeDeveloperApp#api_products}

---

##### `app_family`<sup>Optional</sup> <a name="app_family" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.appFamily"></a>

```python
app_family: str
```

- *Type:* str

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#app_family GoogleApigeeDeveloperApp#app_family}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.attributes"></a>

```python
attributes: IResolvable | typing.List[GoogleApigeeDeveloperAppAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>]

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#attributes GoogleApigeeDeveloperApp#attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_expires_in`<sup>Optional</sup> <a name="key_expires_in" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.keyExpiresIn"></a>

```python
key_expires_in: str
```

- *Type:* str

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#key_expires_in GoogleApigeeDeveloperApp#key_expires_in}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#scopes GoogleApigeeDeveloperApp#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#status GoogleApigeeDeveloperApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.timeouts"></a>

```python
timeouts: GoogleApigeeDeveloperAppTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#timeouts GoogleApigeeDeveloperApp#timeouts}

---

### GoogleApigeeDeveloperAppCredentials <a name="GoogleApigeeDeveloperAppCredentials" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials()
```


### GoogleApigeeDeveloperAppCredentialsApiProducts <a name="GoogleApigeeDeveloperAppCredentialsApiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts()
```


### GoogleApigeeDeveloperAppCredentialsAttributes <a name="GoogleApigeeDeveloperAppCredentialsAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes()
```


### GoogleApigeeDeveloperAppTimeouts <a name="GoogleApigeeDeveloperAppTimeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#create GoogleApigeeDeveloperApp#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#delete GoogleApigeeDeveloperApp#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#update GoogleApigeeDeveloperApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#create GoogleApigeeDeveloperApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#delete GoogleApigeeDeveloperApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_apigee_developer_app#update GoogleApigeeDeveloperApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeDeveloperAppAttributesList <a name="GoogleApigeeDeveloperAppAttributesList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeDeveloperAppAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleApigeeDeveloperAppAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>]

---


### GoogleApigeeDeveloperAppAttributesOutputReference <a name="GoogleApigeeDeveloperAppAttributesOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApigeeDeveloperAppAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>

---


### GoogleApigeeDeveloperAppCredentialsApiProductsList <a name="GoogleApigeeDeveloperAppCredentialsApiProductsList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference <a name="GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct">apiproduct</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts">GoogleApigeeDeveloperAppCredentialsApiProducts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apiproduct`<sup>Required</sup> <a name="apiproduct" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct"></a>

```python
apiproduct: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeDeveloperAppCredentialsApiProducts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts">GoogleApigeeDeveloperAppCredentialsApiProducts</a>

---


### GoogleApigeeDeveloperAppCredentialsAttributesList <a name="GoogleApigeeDeveloperAppCredentialsAttributesList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeDeveloperAppCredentialsAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApigeeDeveloperAppCredentialsAttributesOutputReference <a name="GoogleApigeeDeveloperAppCredentialsAttributesOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes">GoogleApigeeDeveloperAppCredentialsAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeDeveloperAppCredentialsAttributes
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes">GoogleApigeeDeveloperAppCredentialsAttributes</a>

---


### GoogleApigeeDeveloperAppCredentialsList <a name="GoogleApigeeDeveloperAppCredentialsList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApigeeDeveloperAppCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApigeeDeveloperAppCredentialsOutputReference <a name="GoogleApigeeDeveloperAppCredentialsOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.apiProducts">api_products</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList">GoogleApigeeDeveloperAppCredentialsApiProductsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList">GoogleApigeeDeveloperAppCredentialsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.issuedAt">issued_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials">GoogleApigeeDeveloperAppCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_products`<sup>Required</sup> <a name="api_products" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.apiProducts"></a>

```python
api_products: GoogleApigeeDeveloperAppCredentialsApiProductsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList">GoogleApigeeDeveloperAppCredentialsApiProductsList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.attributes"></a>

```python
attributes: GoogleApigeeDeveloperAppCredentialsAttributesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList">GoogleApigeeDeveloperAppCredentialsAttributesList</a>

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `issued_at`<sup>Required</sup> <a name="issued_at" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.issuedAt"></a>

```python
issued_at: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApigeeDeveloperAppCredentials
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials">GoogleApigeeDeveloperAppCredentials</a>

---


### GoogleApigeeDeveloperAppTimeoutsOutputReference <a name="GoogleApigeeDeveloperAppTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apigee_developer_app

googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApigeeDeveloperAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

---



