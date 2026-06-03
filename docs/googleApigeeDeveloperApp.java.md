# `googleApigeeDeveloperApp` Submodule <a name="`googleApigeeDeveloperApp` Submodule" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeDeveloperApp <a name="GoogleApigeeDeveloperApp" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app google_apigee_developer_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperApp;

GoogleApigeeDeveloperApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .callbackUrl(java.lang.String)
    .developerEmail(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .apiProducts(java.util.List<java.lang.String>)
//  .appFamily(java.lang.String)
//  .attributes(IResolvable|java.util.List<GoogleApigeeDeveloperAppAttributes>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .keyExpiresIn(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .timeouts(GoogleApigeeDeveloperAppTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.callbackUrl">callbackUrl</a></code> | <code>java.lang.String</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.developerEmail">developerEmail</a></code> | <code>java.lang.String</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.appFamily">appFamily</a></code> | <code>java.lang.String</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.attributes">attributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>></code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.keyExpiresIn">keyExpiresIn</a></code> | <code>java.lang.String</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.callbackUrl"></a>

- *Type:* java.lang.String

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#callback_url GoogleApigeeDeveloperApp#callback_url}

---

##### `developerEmail`<sup>Required</sup> <a name="developerEmail" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.developerEmail"></a>

- *Type:* java.lang.String

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#developer_email GoogleApigeeDeveloperApp#developer_email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#name GoogleApigeeDeveloperApp#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#org_id GoogleApigeeDeveloperApp#org_id}

---

##### `apiProducts`<sup>Optional</sup> <a name="apiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.apiProducts"></a>

- *Type:* java.util.List<java.lang.String>

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#api_products GoogleApigeeDeveloperApp#api_products}

---

##### `appFamily`<sup>Optional</sup> <a name="appFamily" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.appFamily"></a>

- *Type:* java.lang.String

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#app_family GoogleApigeeDeveloperApp#app_family}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.attributes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#attributes GoogleApigeeDeveloperApp#attributes}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#deletion_policy GoogleApigeeDeveloperApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyExpiresIn`<sup>Optional</sup> <a name="keyExpiresIn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.keyExpiresIn"></a>

- *Type:* java.lang.String

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#key_expires_in GoogleApigeeDeveloperApp#key_expires_in}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#scopes GoogleApigeeDeveloperApp#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#status GoogleApigeeDeveloperApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#timeouts GoogleApigeeDeveloperApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetApiProducts">resetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAppFamily">resetAppFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetKeyExpiresIn">resetKeyExpiresIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putAttributes"></a>

```java
public void putAttributes(IResolvable|java.util.List<GoogleApigeeDeveloperAppAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeDeveloperAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

---

##### `resetApiProducts` <a name="resetApiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetApiProducts"></a>

```java
public void resetApiProducts()
```

##### `resetAppFamily` <a name="resetAppFamily" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAppFamily"></a>

```java
public void resetAppFamily()
```

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetId"></a>

```java
public void resetId()
```

##### `resetKeyExpiresIn` <a name="resetKeyExpiresIn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetKeyExpiresIn"></a>

```java
public void resetKeyExpiresIn()
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeDeveloperApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperApp;

GoogleApigeeDeveloperApp.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperApp;

GoogleApigeeDeveloperApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperApp;

GoogleApigeeDeveloperApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperApp;

GoogleApigeeDeveloperApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeDeveloperApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleApigeeDeveloperApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeDeveloperApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeDeveloperApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeDeveloperApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList">GoogleApigeeDeveloperAppAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList">GoogleApigeeDeveloperAppCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerId">developerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lastModifiedAt">lastModifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference">GoogleApigeeDeveloperAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProductsInput">apiProductsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamilyInput">appFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrlInput">callbackUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmailInput">developerEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresInInput">keyExpiresInInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamily">appFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrl">callbackUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmail">developerEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresIn">keyExpiresIn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributes"></a>

```java
public GoogleApigeeDeveloperAppAttributesList getAttributes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList">GoogleApigeeDeveloperAppAttributesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.credentials"></a>

```java
public GoogleApigeeDeveloperAppCredentialsList getCredentials();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList">GoogleApigeeDeveloperAppCredentialsList</a>

---

##### `developerId`<sup>Required</sup> <a name="developerId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerId"></a>

```java
public java.lang.String getDeveloperId();
```

- *Type:* java.lang.String

---

##### `lastModifiedAt`<sup>Required</sup> <a name="lastModifiedAt" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.lastModifiedAt"></a>

```java
public java.lang.String getLastModifiedAt();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeouts"></a>

```java
public GoogleApigeeDeveloperAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference">GoogleApigeeDeveloperAppTimeoutsOutputReference</a>

---

##### `apiProductsInput`<sup>Optional</sup> <a name="apiProductsInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProductsInput"></a>

```java
public java.util.List<java.lang.String> getApiProductsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appFamilyInput`<sup>Optional</sup> <a name="appFamilyInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamilyInput"></a>

```java
public java.lang.String getAppFamilyInput();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.attributesInput"></a>

```java
public IResolvable|java.util.List<GoogleApigeeDeveloperAppAttributes> getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>>

---

##### `callbackUrlInput`<sup>Optional</sup> <a name="callbackUrlInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrlInput"></a>

```java
public java.lang.String getCallbackUrlInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `developerEmailInput`<sup>Optional</sup> <a name="developerEmailInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmailInput"></a>

```java
public java.lang.String getDeveloperEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyExpiresInInput`<sup>Optional</sup> <a name="keyExpiresInInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresInInput"></a>

```java
public java.lang.String getKeyExpiresInInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.timeoutsInput"></a>

```java
public IResolvable|GoogleApigeeDeveloperAppTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

---

##### `apiProducts`<sup>Required</sup> <a name="apiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.apiProducts"></a>

```java
public java.util.List<java.lang.String> getApiProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appFamily`<sup>Required</sup> <a name="appFamily" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.appFamily"></a>

```java
public java.lang.String getAppFamily();
```

- *Type:* java.lang.String

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.callbackUrl"></a>

```java
public java.lang.String getCallbackUrl();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `developerEmail`<sup>Required</sup> <a name="developerEmail" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.developerEmail"></a>

```java
public java.lang.String getDeveloperEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyExpiresIn`<sup>Required</sup> <a name="keyExpiresIn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.keyExpiresIn"></a>

```java
public java.lang.String getKeyExpiresIn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeDeveloperAppAttributes <a name="GoogleApigeeDeveloperAppAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppAttributes;

GoogleApigeeDeveloperAppAttributes.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.name">name</a></code> | <code>java.lang.String</code> | Key of the attribute. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.value">value</a></code> | <code>java.lang.String</code> | Value of the attribute. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#name GoogleApigeeDeveloperApp#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#value GoogleApigeeDeveloperApp#value}

---

### GoogleApigeeDeveloperAppConfig <a name="GoogleApigeeDeveloperAppConfig" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppConfig;

GoogleApigeeDeveloperAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .callbackUrl(java.lang.String)
    .developerEmail(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .apiProducts(java.util.List<java.lang.String>)
//  .appFamily(java.lang.String)
//  .attributes(IResolvable|java.util.List<GoogleApigeeDeveloperAppAttributes>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .keyExpiresIn(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .timeouts(GoogleApigeeDeveloperAppTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.callbackUrl">callbackUrl</a></code> | <code>java.lang.String</code> | Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.developerEmail">developerEmail</a></code> | <code>java.lang.String</code> | Email address of the developer. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.apiProducts">apiProducts</a></code> | <code>java.util.List<java.lang.String></code> | List of API products associated with the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.appFamily">appFamily</a></code> | <code>java.lang.String</code> | Developer app family. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.attributes">attributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>></code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.keyExpiresIn">keyExpiresIn</a></code> | <code>java.lang.String</code> | Expiration time, in milliseconds, for the consumer key that is generated for the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Scopes to apply to the developer app. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of the credential. Valid values include approved or revoked. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `callbackUrl`<sup>Required</sup> <a name="callbackUrl" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.callbackUrl"></a>

```java
public java.lang.String getCallbackUrl();
```

- *Type:* java.lang.String

Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#callback_url GoogleApigeeDeveloperApp#callback_url}

---

##### `developerEmail`<sup>Required</sup> <a name="developerEmail" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.developerEmail"></a>

```java
public java.lang.String getDeveloperEmail();
```

- *Type:* java.lang.String

Email address of the developer.

This value is used to uniquely identify the developer in Apigee hybrid.
Note that the email address has to be in lowercase only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#developer_email GoogleApigeeDeveloperApp#developer_email}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#name GoogleApigeeDeveloperApp#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#org_id GoogleApigeeDeveloperApp#org_id}

---

##### `apiProducts`<sup>Optional</sup> <a name="apiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.apiProducts"></a>

```java
public java.util.List<java.lang.String> getApiProducts();
```

- *Type:* java.util.List<java.lang.String>

List of API products associated with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#api_products GoogleApigeeDeveloperApp#api_products}

---

##### `appFamily`<sup>Optional</sup> <a name="appFamily" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.appFamily"></a>

```java
public java.lang.String getAppFamily();
```

- *Type:* java.lang.String

Developer app family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#app_family GoogleApigeeDeveloperApp#app_family}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.attributes"></a>

```java
public IResolvable|java.util.List<GoogleApigeeDeveloperAppAttributes> getAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#attributes GoogleApigeeDeveloperApp#attributes}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#deletion_policy GoogleApigeeDeveloperApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#id GoogleApigeeDeveloperApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyExpiresIn`<sup>Optional</sup> <a name="keyExpiresIn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.keyExpiresIn"></a>

```java
public java.lang.String getKeyExpiresIn();
```

- *Type:* java.lang.String

Expiration time, in milliseconds, for the consumer key that is generated for the developer app.

If not set or left to the default value of -1,
the API key never expires. The expiration time can't be updated after it is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#key_expires_in GoogleApigeeDeveloperApp#key_expires_in}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Scopes to apply to the developer app.

The specified scopes must already exist for the API product that
you associate with the developer app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#scopes GoogleApigeeDeveloperApp#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of the credential. Valid values include approved or revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#status GoogleApigeeDeveloperApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppConfig.property.timeouts"></a>

```java
public GoogleApigeeDeveloperAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#timeouts GoogleApigeeDeveloperApp#timeouts}

---

### GoogleApigeeDeveloperAppCredentials <a name="GoogleApigeeDeveloperAppCredentials" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppCredentials;

GoogleApigeeDeveloperAppCredentials.builder()
    .build();
```


### GoogleApigeeDeveloperAppCredentialsApiProducts <a name="GoogleApigeeDeveloperAppCredentialsApiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppCredentialsApiProducts;

GoogleApigeeDeveloperAppCredentialsApiProducts.builder()
    .build();
```


### GoogleApigeeDeveloperAppCredentialsAttributes <a name="GoogleApigeeDeveloperAppCredentialsAttributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppCredentialsAttributes;

GoogleApigeeDeveloperAppCredentialsAttributes.builder()
    .build();
```


### GoogleApigeeDeveloperAppTimeouts <a name="GoogleApigeeDeveloperAppTimeouts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppTimeouts;

GoogleApigeeDeveloperAppTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#create GoogleApigeeDeveloperApp#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#delete GoogleApigeeDeveloperApp#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#update GoogleApigeeDeveloperApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#create GoogleApigeeDeveloperApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#delete GoogleApigeeDeveloperApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_apigee_developer_app#update GoogleApigeeDeveloperApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeDeveloperAppAttributesList <a name="GoogleApigeeDeveloperAppAttributesList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppAttributesList;

new GoogleApigeeDeveloperAppAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.get"></a>

```java
public GoogleApigeeDeveloperAppAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleApigeeDeveloperAppAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>>

---


### GoogleApigeeDeveloperAppAttributesOutputReference <a name="GoogleApigeeDeveloperAppAttributesOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppAttributesOutputReference;

new GoogleApigeeDeveloperAppAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleApigeeDeveloperAppAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppAttributes">GoogleApigeeDeveloperAppAttributes</a>

---


### GoogleApigeeDeveloperAppCredentialsApiProductsList <a name="GoogleApigeeDeveloperAppCredentialsApiProductsList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppCredentialsApiProductsList;

new GoogleApigeeDeveloperAppCredentialsApiProductsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.get"></a>

```java
public GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference <a name="GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference;

new GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct">apiproduct</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts">GoogleApigeeDeveloperAppCredentialsApiProducts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiproduct`<sup>Required</sup> <a name="apiproduct" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.apiproduct"></a>

```java
public java.lang.String getApiproduct();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsOutputReference.property.internalValue"></a>

```java
public GoogleApigeeDeveloperAppCredentialsApiProducts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProducts">GoogleApigeeDeveloperAppCredentialsApiProducts</a>

---


### GoogleApigeeDeveloperAppCredentialsAttributesList <a name="GoogleApigeeDeveloperAppCredentialsAttributesList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppCredentialsAttributesList;

new GoogleApigeeDeveloperAppCredentialsAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.get"></a>

```java
public GoogleApigeeDeveloperAppCredentialsAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleApigeeDeveloperAppCredentialsAttributesOutputReference <a name="GoogleApigeeDeveloperAppCredentialsAttributesOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference;

new GoogleApigeeDeveloperAppCredentialsAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes">GoogleApigeeDeveloperAppCredentialsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesOutputReference.property.internalValue"></a>

```java
public GoogleApigeeDeveloperAppCredentialsAttributes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributes">GoogleApigeeDeveloperAppCredentialsAttributes</a>

---


### GoogleApigeeDeveloperAppCredentialsList <a name="GoogleApigeeDeveloperAppCredentialsList" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppCredentialsList;

new GoogleApigeeDeveloperAppCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.get"></a>

```java
public GoogleApigeeDeveloperAppCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleApigeeDeveloperAppCredentialsOutputReference <a name="GoogleApigeeDeveloperAppCredentialsOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppCredentialsOutputReference;

new GoogleApigeeDeveloperAppCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.apiProducts">apiProducts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList">GoogleApigeeDeveloperAppCredentialsApiProductsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList">GoogleApigeeDeveloperAppCredentialsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.issuedAt">issuedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials">GoogleApigeeDeveloperAppCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiProducts`<sup>Required</sup> <a name="apiProducts" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.apiProducts"></a>

```java
public GoogleApigeeDeveloperAppCredentialsApiProductsList getApiProducts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsApiProductsList">GoogleApigeeDeveloperAppCredentialsApiProductsList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.attributes"></a>

```java
public GoogleApigeeDeveloperAppCredentialsAttributesList getAttributes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsAttributesList">GoogleApigeeDeveloperAppCredentialsAttributesList</a>

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `issuedAt`<sup>Required</sup> <a name="issuedAt" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.issuedAt"></a>

```java
public java.lang.String getIssuedAt();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentialsOutputReference.property.internalValue"></a>

```java
public GoogleApigeeDeveloperAppCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppCredentials">GoogleApigeeDeveloperAppCredentials</a>

---


### GoogleApigeeDeveloperAppTimeoutsOutputReference <a name="GoogleApigeeDeveloperAppTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_developer_app.GoogleApigeeDeveloperAppTimeoutsOutputReference;

new GoogleApigeeDeveloperAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleApigeeDeveloperAppTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeDeveloperApp.GoogleApigeeDeveloperAppTimeouts">GoogleApigeeDeveloperAppTimeouts</a>

---



