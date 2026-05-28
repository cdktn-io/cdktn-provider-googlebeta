# `googleSecurityposturePostureDeployment` Submodule <a name="`googleSecurityposturePostureDeployment` Submodule" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecurityposturePostureDeployment <a name="GoogleSecurityposturePostureDeployment" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment google_securityposture_posture_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_securityposture_posture_deployment.GoogleSecurityposturePostureDeployment;

GoogleSecurityposturePostureDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
    .postureDeploymentId(java.lang.String)
    .postureId(java.lang.String)
    .postureRevisionId(java.lang.String)
    .targetResource(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleSecurityposturePostureDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureDeploymentId">postureDeploymentId</a></code> | <code>java.lang.String</code> | ID of the posture deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureId">postureId</a></code> | <code>java.lang.String</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureRevisionId">postureRevisionId</a></code> | <code>java.lang.String</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.targetResource">targetResource</a></code> | <code>java.lang.String</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the posture deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#location GoogleSecurityposturePostureDeployment#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#parent GoogleSecurityposturePostureDeployment#parent}

---

##### `postureDeploymentId`<sup>Required</sup> <a name="postureDeploymentId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureDeploymentId"></a>

- *Type:* java.lang.String

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#posture_deployment_id GoogleSecurityposturePostureDeployment#posture_deployment_id}

---

##### `postureId`<sup>Required</sup> <a name="postureId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureId"></a>

- *Type:* java.lang.String

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#posture_id GoogleSecurityposturePostureDeployment#posture_id}

---

##### `postureRevisionId`<sup>Required</sup> <a name="postureRevisionId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureRevisionId"></a>

- *Type:* java.lang.String

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#posture_revision_id GoogleSecurityposturePostureDeployment#posture_revision_id}

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.targetResource"></a>

- *Type:* java.lang.String

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#target_resource GoogleSecurityposturePostureDeployment#target_resource}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#deletion_policy GoogleSecurityposturePostureDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#description GoogleSecurityposturePostureDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#timeouts GoogleSecurityposturePostureDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoogleSecurityposturePostureDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSecurityposturePostureDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_securityposture_posture_deployment.GoogleSecurityposturePostureDeployment;

GoogleSecurityposturePostureDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_securityposture_posture_deployment.GoogleSecurityposturePostureDeployment;

GoogleSecurityposturePostureDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_securityposture_posture_deployment.GoogleSecurityposturePostureDeployment;

GoogleSecurityposturePostureDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_securityposture_posture_deployment.GoogleSecurityposturePostureDeployment;

GoogleSecurityposturePostureDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSecurityposturePostureDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleSecurityposturePostureDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSecurityposturePostureDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSecurityposturePostureDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecurityposturePostureDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureId">desiredPostureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureRevisionId">desiredPostureRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.failureMessage">failureMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.reconciling">reconciling</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference">GoogleSecurityposturePostureDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentIdInput">postureDeploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureIdInput">postureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionIdInput">postureRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResourceInput">targetResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentId">postureDeploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureId">postureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionId">postureRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResource">targetResource</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `desiredPostureId`<sup>Required</sup> <a name="desiredPostureId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureId"></a>

```java
public java.lang.String getDesiredPostureId();
```

- *Type:* java.lang.String

---

##### `desiredPostureRevisionId`<sup>Required</sup> <a name="desiredPostureRevisionId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureRevisionId"></a>

```java
public java.lang.String getDesiredPostureRevisionId();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `failureMessage`<sup>Required</sup> <a name="failureMessage" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.failureMessage"></a>

```java
public java.lang.String getFailureMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeouts"></a>

```java
public GoogleSecurityposturePostureDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference">GoogleSecurityposturePostureDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `postureDeploymentIdInput`<sup>Optional</sup> <a name="postureDeploymentIdInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentIdInput"></a>

```java
public java.lang.String getPostureDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `postureIdInput`<sup>Optional</sup> <a name="postureIdInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureIdInput"></a>

```java
public java.lang.String getPostureIdInput();
```

- *Type:* java.lang.String

---

##### `postureRevisionIdInput`<sup>Optional</sup> <a name="postureRevisionIdInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionIdInput"></a>

```java
public java.lang.String getPostureRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `targetResourceInput`<sup>Optional</sup> <a name="targetResourceInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResourceInput"></a>

```java
public java.lang.String getTargetResourceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleSecurityposturePostureDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `postureDeploymentId`<sup>Required</sup> <a name="postureDeploymentId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentId"></a>

```java
public java.lang.String getPostureDeploymentId();
```

- *Type:* java.lang.String

---

##### `postureId`<sup>Required</sup> <a name="postureId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureId"></a>

```java
public java.lang.String getPostureId();
```

- *Type:* java.lang.String

---

##### `postureRevisionId`<sup>Required</sup> <a name="postureRevisionId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionId"></a>

```java
public java.lang.String getPostureRevisionId();
```

- *Type:* java.lang.String

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResource"></a>

```java
public java.lang.String getTargetResource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecurityposturePostureDeploymentConfig <a name="GoogleSecurityposturePostureDeploymentConfig" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_securityposture_posture_deployment.GoogleSecurityposturePostureDeploymentConfig;

GoogleSecurityposturePostureDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
    .postureDeploymentId(java.lang.String)
    .postureId(java.lang.String)
    .postureRevisionId(java.lang.String)
    .targetResource(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleSecurityposturePostureDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureDeploymentId">postureDeploymentId</a></code> | <code>java.lang.String</code> | ID of the posture deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureId">postureId</a></code> | <code>java.lang.String</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureRevisionId">postureRevisionId</a></code> | <code>java.lang.String</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.targetResource">targetResource</a></code> | <code>java.lang.String</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the posture deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#location GoogleSecurityposturePostureDeployment#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#parent GoogleSecurityposturePostureDeployment#parent}

---

##### `postureDeploymentId`<sup>Required</sup> <a name="postureDeploymentId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureDeploymentId"></a>

```java
public java.lang.String getPostureDeploymentId();
```

- *Type:* java.lang.String

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#posture_deployment_id GoogleSecurityposturePostureDeployment#posture_deployment_id}

---

##### `postureId`<sup>Required</sup> <a name="postureId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureId"></a>

```java
public java.lang.String getPostureId();
```

- *Type:* java.lang.String

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#posture_id GoogleSecurityposturePostureDeployment#posture_id}

---

##### `postureRevisionId`<sup>Required</sup> <a name="postureRevisionId" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureRevisionId"></a>

```java
public java.lang.String getPostureRevisionId();
```

- *Type:* java.lang.String

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#posture_revision_id GoogleSecurityposturePostureDeployment#posture_revision_id}

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.targetResource"></a>

```java
public java.lang.String getTargetResource();
```

- *Type:* java.lang.String

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#target_resource GoogleSecurityposturePostureDeployment#target_resource}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#deletion_policy GoogleSecurityposturePostureDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#description GoogleSecurityposturePostureDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.timeouts"></a>

```java
public GoogleSecurityposturePostureDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#timeouts GoogleSecurityposturePostureDeployment#timeouts}

---

### GoogleSecurityposturePostureDeploymentTimeouts <a name="GoogleSecurityposturePostureDeploymentTimeouts" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_securityposture_posture_deployment.GoogleSecurityposturePostureDeploymentTimeouts;

GoogleSecurityposturePostureDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#create GoogleSecurityposturePostureDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#delete GoogleSecurityposturePostureDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#update GoogleSecurityposturePostureDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#create GoogleSecurityposturePostureDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#delete GoogleSecurityposturePostureDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_securityposture_posture_deployment#update GoogleSecurityposturePostureDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecurityposturePostureDeploymentTimeoutsOutputReference <a name="GoogleSecurityposturePostureDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_securityposture_posture_deployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference;

new GoogleSecurityposturePostureDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSecurityposturePostureDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>

---



