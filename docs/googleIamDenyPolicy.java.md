# `googleIamDenyPolicy` Submodule <a name="`googleIamDenyPolicy` Submodule" id="@cdktn/provider-google-beta.googleIamDenyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamDenyPolicy <a name="GoogleIamDenyPolicy" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy google_iam_deny_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicy;

GoogleIamDenyPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .parent(java.lang.String)
    .rules(IResolvable|java.util.List<GoogleIamDenyPolicyRules>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleIamDenyPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#name GoogleIamDenyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#parent GoogleIamDenyPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#rules GoogleIamDenyPolicy#rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#deletion_policy GoogleIamDenyPolicy#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#display_name GoogleIamDenyPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#timeouts GoogleIamDenyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<GoogleIamDenyPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleIamDenyPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamDenyPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicy;

GoogleIamDenyPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicy;

GoogleIamDenyPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicy;

GoogleIamDenyPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicy;

GoogleIamDenyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIamDenyPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleIamDenyPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIamDenyPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIamDenyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamDenyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList">GoogleIamDenyPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference">GoogleIamDenyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rules"></a>

```java
public GoogleIamDenyPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList">GoogleIamDenyPolicyRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeouts"></a>

```java
public GoogleIamDenyPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference">GoogleIamDenyPolicyTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.rulesInput"></a>

```java
public IResolvable|java.util.List<GoogleIamDenyPolicyRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleIamDenyPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamDenyPolicyConfig <a name="GoogleIamDenyPolicyConfig" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyConfig;

GoogleIamDenyPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .parent(java.lang.String)
    .rules(IResolvable|java.util.List<GoogleIamDenyPolicyRules>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleIamDenyPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#name GoogleIamDenyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#parent GoogleIamDenyPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.rules"></a>

```java
public IResolvable|java.util.List<GoogleIamDenyPolicyRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#rules GoogleIamDenyPolicy#rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#deletion_policy GoogleIamDenyPolicy#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#display_name GoogleIamDenyPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#id GoogleIamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyConfig.property.timeouts"></a>

```java
public GoogleIamDenyPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#timeouts GoogleIamDenyPolicy#timeouts}

---

### GoogleIamDenyPolicyRules <a name="GoogleIamDenyPolicyRules" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyRules;

GoogleIamDenyPolicyRules.builder()
//  .denyRule(GoogleIamDenyPolicyRulesDenyRule)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.denyRule">denyRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a></code> | deny_rule block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.description">description</a></code> | <code>java.lang.String</code> | The description of the rule. |

---

##### `denyRule`<sup>Optional</sup> <a name="denyRule" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.denyRule"></a>

```java
public GoogleIamDenyPolicyRulesDenyRule getDenyRule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

deny_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#deny_rule GoogleIamDenyPolicy#deny_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#description GoogleIamDenyPolicy#description}

---

### GoogleIamDenyPolicyRulesDenyRule <a name="GoogleIamDenyPolicyRulesDenyRule" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyRulesDenyRule;

GoogleIamDenyPolicyRulesDenyRule.builder()
//  .denialCondition(GoogleIamDenyPolicyRulesDenyRuleDenialCondition)
//  .deniedPermissions(java.util.List<java.lang.String>)
//  .deniedPrincipals(java.util.List<java.lang.String>)
//  .exceptionPermissions(java.util.List<java.lang.String>)
//  .exceptionPrincipals(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.denialCondition">denialCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a></code> | denial_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPermissions">deniedPermissions</a></code> | <code>java.util.List<java.lang.String></code> | The permissions that are explicitly denied by this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPrincipals">deniedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | The identities that are prevented from using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPermissions">exceptionPermissions</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPrincipals">exceptionPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals. |

---

##### `denialCondition`<sup>Optional</sup> <a name="denialCondition" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.denialCondition"></a>

```java
public GoogleIamDenyPolicyRulesDenyRuleDenialCondition getDenialCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

denial_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#denial_condition GoogleIamDenyPolicy#denial_condition}

---

##### `deniedPermissions`<sup>Optional</sup> <a name="deniedPermissions" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPermissions"></a>

```java
public java.util.List<java.lang.String> getDeniedPermissions();
```

- *Type:* java.util.List<java.lang.String>

The permissions that are explicitly denied by this rule.

Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#denied_permissions GoogleIamDenyPolicy#denied_permissions}

---

##### `deniedPrincipals`<sup>Optional</sup> <a name="deniedPrincipals" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.deniedPrincipals"></a>

```java
public java.util.List<java.lang.String> getDeniedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

The identities that are prevented from using one or more permissions on Google Cloud resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#denied_principals GoogleIamDenyPolicy#denied_principals}

---

##### `exceptionPermissions`<sup>Optional</sup> <a name="exceptionPermissions" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPermissions"></a>

```java
public java.util.List<java.lang.String> getExceptionPermissions();
```

- *Type:* java.util.List<java.lang.String>

Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.

If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#exception_permissions GoogleIamDenyPolicy#exception_permissions}

---

##### `exceptionPrincipals`<sup>Optional</sup> <a name="exceptionPrincipals" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule.property.exceptionPrincipals"></a>

```java
public java.util.List<java.lang.String> getExceptionPrincipals();
```

- *Type:* java.util.List<java.lang.String>

The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.

For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#exception_principals GoogleIamDenyPolicy#exception_principals}

---

### GoogleIamDenyPolicyRulesDenyRuleDenialCondition <a name="GoogleIamDenyPolicyRulesDenyRuleDenialCondition" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition;

GoogleIamDenyPolicyRulesDenyRuleDenialCondition.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#expression GoogleIamDenyPolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#description GoogleIamDenyPolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#location GoogleIamDenyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#title GoogleIamDenyPolicy#title}

---

### GoogleIamDenyPolicyTimeouts <a name="GoogleIamDenyPolicyTimeouts" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyTimeouts;

GoogleIamDenyPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#create GoogleIamDenyPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#delete GoogleIamDenyPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#update GoogleIamDenyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#create GoogleIamDenyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#delete GoogleIamDenyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_deny_policy#update GoogleIamDenyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference <a name="GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference;

new GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue"></a>

```java
public GoogleIamDenyPolicyRulesDenyRuleDenialCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

---


### GoogleIamDenyPolicyRulesDenyRuleOutputReference <a name="GoogleIamDenyPolicyRulesDenyRuleOutputReference" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyRulesDenyRuleOutputReference;

new GoogleIamDenyPolicyRulesDenyRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition">putDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition">resetDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions">resetDeniedPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals">resetDeniedPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions">resetExceptionPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals">resetExceptionPrincipals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDenialCondition` <a name="putDenialCondition" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition"></a>

```java
public void putDenialCondition(GoogleIamDenyPolicyRulesDenyRuleDenialCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `resetDenialCondition` <a name="resetDenialCondition" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition"></a>

```java
public void resetDenialCondition()
```

##### `resetDeniedPermissions` <a name="resetDeniedPermissions" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions"></a>

```java
public void resetDeniedPermissions()
```

##### `resetDeniedPrincipals` <a name="resetDeniedPrincipals" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals"></a>

```java
public void resetDeniedPrincipals()
```

##### `resetExceptionPermissions` <a name="resetExceptionPermissions" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions"></a>

```java
public void resetExceptionPermissions()
```

##### `resetExceptionPrincipals` <a name="resetExceptionPrincipals" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals"></a>

```java
public void resetExceptionPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition">denialCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference">GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput">denialConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput">deniedPermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput">deniedPrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput">exceptionPermissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput">exceptionPrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions">deniedPermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals">deniedPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions">exceptionPermissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals">exceptionPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `denialCondition`<sup>Required</sup> <a name="denialCondition" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition"></a>

```java
public GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference getDenialCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference">GoogleIamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a>

---

##### `denialConditionInput`<sup>Optional</sup> <a name="denialConditionInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput"></a>

```java
public GoogleIamDenyPolicyRulesDenyRuleDenialCondition getDenialConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleDenialCondition">GoogleIamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `deniedPermissionsInput`<sup>Optional</sup> <a name="deniedPermissionsInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput"></a>

```java
public java.util.List<java.lang.String> getDeniedPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedPrincipalsInput`<sup>Optional</sup> <a name="deniedPrincipalsInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getDeniedPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exceptionPermissionsInput`<sup>Optional</sup> <a name="exceptionPermissionsInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput"></a>

```java
public java.util.List<java.lang.String> getExceptionPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exceptionPrincipalsInput`<sup>Optional</sup> <a name="exceptionPrincipalsInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getExceptionPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedPermissions`<sup>Required</sup> <a name="deniedPermissions" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions"></a>

```java
public java.util.List<java.lang.String> getDeniedPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedPrincipals`<sup>Required</sup> <a name="deniedPrincipals" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals"></a>

```java
public java.util.List<java.lang.String> getDeniedPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exceptionPermissions`<sup>Required</sup> <a name="exceptionPermissions" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions"></a>

```java
public java.util.List<java.lang.String> getExceptionPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exceptionPrincipals`<sup>Required</sup> <a name="exceptionPrincipals" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals"></a>

```java
public java.util.List<java.lang.String> getExceptionPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference.property.internalValue"></a>

```java
public GoogleIamDenyPolicyRulesDenyRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

---


### GoogleIamDenyPolicyRulesList <a name="GoogleIamDenyPolicyRulesList" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyRulesList;

new GoogleIamDenyPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.get"></a>

```java
public GoogleIamDenyPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleIamDenyPolicyRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>>

---


### GoogleIamDenyPolicyRulesOutputReference <a name="GoogleIamDenyPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyRulesOutputReference;

new GoogleIamDenyPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule">putDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDenyRule">resetDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDenyRule` <a name="putDenyRule" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule"></a>

```java
public void putDenyRule(GoogleIamDenyPolicyRulesDenyRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.putDenyRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

---

##### `resetDenyRule` <a name="resetDenyRule" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDenyRule"></a>

```java
public void resetDenyRule()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRule">denyRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference">GoogleIamDenyPolicyRulesDenyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRuleInput">denyRuleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `denyRule`<sup>Required</sup> <a name="denyRule" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRule"></a>

```java
public GoogleIamDenyPolicyRulesDenyRuleOutputReference getDenyRule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRuleOutputReference">GoogleIamDenyPolicyRulesDenyRuleOutputReference</a>

---

##### `denyRuleInput`<sup>Optional</sup> <a name="denyRuleInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.denyRuleInput"></a>

```java
public GoogleIamDenyPolicyRulesDenyRule getDenyRuleInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesDenyRule">GoogleIamDenyPolicyRulesDenyRule</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleIamDenyPolicyRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyRules">GoogleIamDenyPolicyRules</a>

---


### GoogleIamDenyPolicyTimeoutsOutputReference <a name="GoogleIamDenyPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iam_deny_policy.GoogleIamDenyPolicyTimeoutsOutputReference;

new GoogleIamDenyPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleIamDenyPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamDenyPolicy.GoogleIamDenyPolicyTimeouts">GoogleIamDenyPolicyTimeouts</a>

---



