# `googleGkeHubMembershipRbacRoleBinding` Submodule <a name="`googleGkeHubMembershipRbacRoleBinding` Submodule" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubMembershipRbacRoleBinding <a name="GoogleGkeHubMembershipRbacRoleBinding" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding google_gke_hub_membership_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubMembershipRbacRoleBinding(Construct Scope, string Id, GoogleGkeHubMembershipRbacRoleBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig">GoogleGkeHubMembershipRbacRoleBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig">GoogleGkeHubMembershipRbacRoleBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putRole">PutRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRole` <a name="PutRole" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putRole"></a>

```csharp
private void PutRole(GoogleGkeHubMembershipRbacRoleBindingRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGkeHubMembershipRbacRoleBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGkeHubMembershipRbacRoleBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGkeHubMembershipRbacRoleBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGkeHubMembershipRbacRoleBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGkeHubMembershipRbacRoleBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGkeHubMembershipRbacRoleBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleGkeHubMembershipRbacRoleBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeHubMembershipRbacRoleBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeHubMembershipRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubMembershipRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.role">Role</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference">GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.state">State</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList">GoogleGkeHubMembershipRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipIdInput">MembershipIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingIdInput">MembershipRbacRoleBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.roleInput">RoleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipId">MembershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingId">MembershipRbacRoleBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.role"></a>

```csharp
public GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference Role { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference">GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.state"></a>

```csharp
public GoogleGkeHubMembershipRbacRoleBindingStateList State { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList">GoogleGkeHubMembershipRbacRoleBindingStateList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeouts"></a>

```csharp
public GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference">GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembershipIdInput`<sup>Optional</sup> <a name="MembershipIdInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipIdInput"></a>

```csharp
public string MembershipIdInput { get; }
```

- *Type:* string

---

##### `MembershipRbacRoleBindingIdInput`<sup>Optional</sup> <a name="MembershipRbacRoleBindingIdInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingIdInput"></a>

```csharp
public string MembershipRbacRoleBindingIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.roleInput"></a>

```csharp
public GoogleGkeHubMembershipRbacRoleBindingRole RoleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleGkeHubMembershipRbacRoleBindingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MembershipId`<sup>Required</sup> <a name="MembershipId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipId"></a>

```csharp
public string MembershipId { get; }
```

- *Type:* string

---

##### `MembershipRbacRoleBindingId`<sup>Required</sup> <a name="MembershipRbacRoleBindingId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.membershipRbacRoleBindingId"></a>

```csharp
public string MembershipRbacRoleBindingId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubMembershipRbacRoleBindingConfig <a name="GoogleGkeHubMembershipRbacRoleBindingConfig" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubMembershipRbacRoleBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string MembershipId,
    string MembershipRbacRoleBindingId,
    GoogleGkeHubMembershipRbacRoleBindingRole Role,
    string User,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    GoogleGkeHubMembershipRbacRoleBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.location">Location</a></code> | <code>string</code> | Location of the Membership. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipId">MembershipId</a></code> | <code>string</code> | Id of the membership. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipRbacRoleBindingId">MembershipRbacRoleBindingId</a></code> | <code>string</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.role">Role</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.user">User</a></code> | <code>string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#id GoogleGkeHubMembershipRbacRoleBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#project GoogleGkeHubMembershipRbacRoleBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the Membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#location GoogleGkeHubMembershipRbacRoleBinding#location}

---

##### `MembershipId`<sup>Required</sup> <a name="MembershipId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipId"></a>

```csharp
public string MembershipId { get; set; }
```

- *Type:* string

Id of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_id GoogleGkeHubMembershipRbacRoleBinding#membership_id}

---

##### `MembershipRbacRoleBindingId`<sup>Required</sup> <a name="MembershipRbacRoleBindingId" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.membershipRbacRoleBindingId"></a>

```csharp
public string MembershipRbacRoleBindingId { get; set; }
```

- *Type:* string

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#membership_rbac_role_binding_id GoogleGkeHubMembershipRbacRoleBinding#membership_rbac_role_binding_id}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.role"></a>

```csharp
public GoogleGkeHubMembershipRbacRoleBindingRole Role { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#role GoogleGkeHubMembershipRbacRoleBinding#role}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#user GoogleGkeHubMembershipRbacRoleBinding#user}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#deletion_policy GoogleGkeHubMembershipRbacRoleBinding#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#id GoogleGkeHubMembershipRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#project GoogleGkeHubMembershipRbacRoleBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingConfig.property.timeouts"></a>

```csharp
public GoogleGkeHubMembershipRbacRoleBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#timeouts GoogleGkeHubMembershipRbacRoleBinding#timeouts}

---

### GoogleGkeHubMembershipRbacRoleBindingRole <a name="GoogleGkeHubMembershipRbacRoleBindingRole" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubMembershipRbacRoleBindingRole {
    string PredefinedRole
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole.property.predefinedRole">PredefinedRole</a></code> | <code>string</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW", "ANTHOS_SUPPORT"]. |

---

##### `PredefinedRole`<sup>Required</sup> <a name="PredefinedRole" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole.property.predefinedRole"></a>

```csharp
public string PredefinedRole { get; set; }
```

- *Type:* string

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW", "ANTHOS_SUPPORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#predefined_role GoogleGkeHubMembershipRbacRoleBinding#predefined_role}

---

### GoogleGkeHubMembershipRbacRoleBindingState <a name="GoogleGkeHubMembershipRbacRoleBindingState" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubMembershipRbacRoleBindingState {

};
```


### GoogleGkeHubMembershipRbacRoleBindingTimeouts <a name="GoogleGkeHubMembershipRbacRoleBindingTimeouts" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubMembershipRbacRoleBindingTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#create GoogleGkeHubMembershipRbacRoleBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#delete GoogleGkeHubMembershipRbacRoleBinding#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#create GoogleGkeHubMembershipRbacRoleBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_gke_hub_membership_rbac_role_binding#delete GoogleGkeHubMembershipRbacRoleBinding#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference <a name="GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">PredefinedRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRole">PredefinedRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredefinedRoleInput`<sup>Optional</sup> <a name="PredefinedRoleInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```csharp
public string PredefinedRoleInput { get; }
```

- *Type:* string

---

##### `PredefinedRole`<sup>Required</sup> <a name="PredefinedRole" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```csharp
public string PredefinedRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubMembershipRbacRoleBindingRole InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingRole">GoogleGkeHubMembershipRbacRoleBindingRole</a>

---


### GoogleGkeHubMembershipRbacRoleBindingStateList <a name="GoogleGkeHubMembershipRbacRoleBindingStateList" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubMembershipRbacRoleBindingStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.get"></a>

```csharp
private GoogleGkeHubMembershipRbacRoleBindingStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeHubMembershipRbacRoleBindingStateOutputReference <a name="GoogleGkeHubMembershipRbacRoleBindingStateOutputReference" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubMembershipRbacRoleBindingStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState">GoogleGkeHubMembershipRbacRoleBindingState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingStateOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubMembershipRbacRoleBindingState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingState">GoogleGkeHubMembershipRbacRoleBindingState</a>

---


### GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference <a name="GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleGkeHubMembershipRbacRoleBindingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubMembershipRbacRoleBinding.GoogleGkeHubMembershipRbacRoleBindingTimeouts">GoogleGkeHubMembershipRbacRoleBindingTimeouts</a>

---



