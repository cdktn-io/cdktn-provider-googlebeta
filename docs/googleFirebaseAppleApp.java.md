# `googleFirebaseAppleApp` Submodule <a name="`googleFirebaseAppleApp` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAppleApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppleApp <a name="GoogleFirebaseAppleApp" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app google_firebase_apple_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_apple_app.GoogleFirebaseAppleApp;

GoogleFirebaseAppleApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bundleId(java.lang.String)
    .displayName(java.lang.String)
//  .apiKeyId(java.lang.String)
//  .appStoreId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .teamId(java.lang.String)
//  .timeouts(GoogleFirebaseAppleAppTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.bundleId">bundleId</a></code> | <code>java.lang.String</code> | The canonical bundle ID of the Apple app as it would appear in the Apple AppStore. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-assigned display name of the App. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.apiKeyId">apiKeyId</a></code> | <code>java.lang.String</code> | The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.appStoreId">appStoreId</a></code> | <code>java.lang.String</code> | The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#id GoogleFirebaseAppleApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#project GoogleFirebaseAppleApp#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | The Apple Developer Team ID associated with the App in the App Store. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.bundleId"></a>

- *Type:* java.lang.String

The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#bundle_id GoogleFirebaseAppleApp#bundle_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-assigned display name of the App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#display_name GoogleFirebaseAppleApp#display_name}

---

##### `apiKeyId`<sup>Optional</sup> <a name="apiKeyId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.apiKeyId"></a>

- *Type:* java.lang.String

The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.

If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#api_key_id GoogleFirebaseAppleApp#api_key_id}

---

##### `appStoreId`<sup>Optional</sup> <a name="appStoreId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.appStoreId"></a>

- *Type:* java.lang.String

The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#app_store_id GoogleFirebaseAppleApp#app_store_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#deletion_policy GoogleFirebaseAppleApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#id GoogleFirebaseAppleApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#project GoogleFirebaseAppleApp#project}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

The Apple Developer Team ID associated with the App in the App Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#team_id GoogleFirebaseAppleApp#team_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#timeouts GoogleFirebaseAppleApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetApiKeyId">resetApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetAppStoreId">resetAppStoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseAppleAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>

---

##### `resetApiKeyId` <a name="resetApiKeyId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetApiKeyId"></a>

```java
public void resetApiKeyId()
```

##### `resetAppStoreId` <a name="resetAppStoreId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetAppStoreId"></a>

```java
public void resetAppStoreId()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetProject"></a>

```java
public void resetProject()
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetTeamId"></a>

```java
public void resetTeamId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAppleApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_apple_app.GoogleFirebaseAppleApp;

GoogleFirebaseAppleApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_apple_app.GoogleFirebaseAppleApp;

GoogleFirebaseAppleApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_apple_app.GoogleFirebaseAppleApp;

GoogleFirebaseAppleApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_apple_app.GoogleFirebaseAppleApp;

GoogleFirebaseAppleApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseAppleApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleFirebaseAppleApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseAppleApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseAppleApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppleApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference">GoogleFirebaseAppleAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.apiKeyIdInput">apiKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appStoreIdInput">appStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.bundleIdInput">bundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.apiKeyId">apiKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appStoreId">appStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.timeouts"></a>

```java
public GoogleFirebaseAppleAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference">GoogleFirebaseAppleAppTimeoutsOutputReference</a>

---

##### `apiKeyIdInput`<sup>Optional</sup> <a name="apiKeyIdInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.apiKeyIdInput"></a>

```java
public java.lang.String getApiKeyIdInput();
```

- *Type:* java.lang.String

---

##### `appStoreIdInput`<sup>Optional</sup> <a name="appStoreIdInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appStoreIdInput"></a>

```java
public java.lang.String getAppStoreIdInput();
```

- *Type:* java.lang.String

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.bundleIdInput"></a>

```java
public java.lang.String getBundleIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.timeoutsInput"></a>

```java
public IResolvable|GoogleFirebaseAppleAppTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.apiKeyId"></a>

```java
public java.lang.String getApiKeyId();
```

- *Type:* java.lang.String

---

##### `appStoreId`<sup>Required</sup> <a name="appStoreId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appStoreId"></a>

```java
public java.lang.String getAppStoreId();
```

- *Type:* java.lang.String

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppleAppConfig <a name="GoogleFirebaseAppleAppConfig" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_apple_app.GoogleFirebaseAppleAppConfig;

GoogleFirebaseAppleAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bundleId(java.lang.String)
    .displayName(java.lang.String)
//  .apiKeyId(java.lang.String)
//  .appStoreId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .teamId(java.lang.String)
//  .timeouts(GoogleFirebaseAppleAppTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | The canonical bundle ID of the Apple app as it would appear in the Apple AppStore. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-assigned display name of the App. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.apiKeyId">apiKeyId</a></code> | <code>java.lang.String</code> | The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.appStoreId">appStoreId</a></code> | <code>java.lang.String</code> | The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#id GoogleFirebaseAppleApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#project GoogleFirebaseAppleApp#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | The Apple Developer Team ID associated with the App in the App Store. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#bundle_id GoogleFirebaseAppleApp#bundle_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-assigned display name of the App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#display_name GoogleFirebaseAppleApp#display_name}

---

##### `apiKeyId`<sup>Optional</sup> <a name="apiKeyId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.apiKeyId"></a>

```java
public java.lang.String getApiKeyId();
```

- *Type:* java.lang.String

The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.

If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#api_key_id GoogleFirebaseAppleApp#api_key_id}

---

##### `appStoreId`<sup>Optional</sup> <a name="appStoreId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.appStoreId"></a>

```java
public java.lang.String getAppStoreId();
```

- *Type:* java.lang.String

The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#app_store_id GoogleFirebaseAppleApp#app_store_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#deletion_policy GoogleFirebaseAppleApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#id GoogleFirebaseAppleApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#project GoogleFirebaseAppleApp#project}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

The Apple Developer Team ID associated with the App in the App Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#team_id GoogleFirebaseAppleApp#team_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.timeouts"></a>

```java
public GoogleFirebaseAppleAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#timeouts GoogleFirebaseAppleApp#timeouts}

---

### GoogleFirebaseAppleAppTimeouts <a name="GoogleFirebaseAppleAppTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_apple_app.GoogleFirebaseAppleAppTimeouts;

GoogleFirebaseAppleAppTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#create GoogleFirebaseAppleApp#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#delete GoogleFirebaseAppleApp#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#update GoogleFirebaseAppleApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#create GoogleFirebaseAppleApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#delete GoogleFirebaseAppleApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_apple_app#update GoogleFirebaseAppleApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppleAppTimeoutsOutputReference <a name="GoogleFirebaseAppleAppTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_apple_app.GoogleFirebaseAppleAppTimeoutsOutputReference;

new GoogleFirebaseAppleAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseAppleAppTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>

---



