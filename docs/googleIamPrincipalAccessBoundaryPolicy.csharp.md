# `googleIamPrincipalAccessBoundaryPolicy` Submodule <a name="`googleIamPrincipalAccessBoundaryPolicy` Submodule" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamPrincipalAccessBoundaryPolicy <a name="GoogleIamPrincipalAccessBoundaryPolicy" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamPrincipalAccessBoundaryPolicy(Construct Scope, string Id, GoogleIamPrincipalAccessBoundaryPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig">GoogleIamPrincipalAccessBoundaryPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig">GoogleIamPrincipalAccessBoundaryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails"></a>

```csharp
private void PutDetails(GoogleIamPrincipalAccessBoundaryPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIamPrincipalAccessBoundaryPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDetails"></a>

```csharp
private void ResetDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamPrincipalAccessBoundaryPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamPrincipalAccessBoundaryPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamPrincipalAccessBoundaryPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamPrincipalAccessBoundaryPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamPrincipalAccessBoundaryPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleIamPrincipalAccessBoundaryPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamPrincipalAccessBoundaryPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamPrincipalAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamPrincipalAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput">PrincipalAccessBoundaryPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId">PrincipalAccessBoundaryPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.details"></a>

```csharp
public GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference Details { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeouts"></a>

```csharp
public GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.detailsInput"></a>

```csharp
public GoogleIamPrincipalAccessBoundaryPolicyDetails DetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PrincipalAccessBoundaryPolicyIdInput`<sup>Optional</sup> <a name="PrincipalAccessBoundaryPolicyIdInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput"></a>

```csharp
public string PrincipalAccessBoundaryPolicyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleIamPrincipalAccessBoundaryPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `PrincipalAccessBoundaryPolicyId`<sup>Required</sup> <a name="PrincipalAccessBoundaryPolicyId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId"></a>

```csharp
public string PrincipalAccessBoundaryPolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamPrincipalAccessBoundaryPolicyConfig <a name="GoogleIamPrincipalAccessBoundaryPolicyConfig" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamPrincipalAccessBoundaryPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Organization,
    string PrincipalAccessBoundaryPolicyId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DeletionPolicy = null,
    GoogleIamPrincipalAccessBoundaryPolicyDetails Details = null,
    string DisplayName = null,
    string Id = null,
    GoogleIamPrincipalAccessBoundaryPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.location">Location</a></code> | <code>string</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.organization">Organization</a></code> | <code>string</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId">PrincipalAccessBoundaryPolicyId</a></code> | <code>string</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#location GoogleIamPrincipalAccessBoundaryPolicy#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#organization GoogleIamPrincipalAccessBoundaryPolicy#organization}

---

##### `PrincipalAccessBoundaryPolicyId`<sup>Required</sup> <a name="PrincipalAccessBoundaryPolicyId" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId"></a>

```csharp
public string PrincipalAccessBoundaryPolicyId { get; set; }
```

- *Type:* string

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#principal_access_boundary_policy_id GoogleIamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#annotations GoogleIamPrincipalAccessBoundaryPolicy#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#deletion_policy GoogleIamPrincipalAccessBoundaryPolicy#deletion_policy}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.details"></a>

```csharp
public GoogleIamPrincipalAccessBoundaryPolicyDetails Details { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#details GoogleIamPrincipalAccessBoundaryPolicy#details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#display_name GoogleIamPrincipalAccessBoundaryPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.timeouts"></a>

```csharp
public GoogleIamPrincipalAccessBoundaryPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#timeouts GoogleIamPrincipalAccessBoundaryPolicy#timeouts}

---

### GoogleIamPrincipalAccessBoundaryPolicyDetails <a name="GoogleIamPrincipalAccessBoundaryPolicyDetails" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamPrincipalAccessBoundaryPolicyDetails {
    IResolvable|GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[] Rules,
    string EnforcementVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion">EnforcementVersion</a></code> | <code>string</code> | The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.rules"></a>

```csharp
public IResolvable|GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#rules GoogleIamPrincipalAccessBoundaryPolicy#rules}

---

##### `EnforcementVersion`<sup>Optional</sup> <a name="EnforcementVersion" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion"></a>

```csharp
public string EnforcementVersion { get; set; }
```

- *Type:* string

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#enforcement_version GoogleIamPrincipalAccessBoundaryPolicy#enforcement_version}

---

### GoogleIamPrincipalAccessBoundaryPolicyDetailsRules <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRules" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamPrincipalAccessBoundaryPolicyDetailsRules {
    string Effect,
    string[] Resources,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.effect">Effect</a></code> | <code>string</code> | The access relationship of principals to the resources in this rule. Possible values: ALLOW. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.resources">Resources</a></code> | <code>string[]</code> | A list of Cloud Resource Manager resources. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.description">Description</a></code> | <code>string</code> | The description of the principal access boundary policy rule. Must be less than or equal to 256 characters. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

The access relationship of principals to the resources in this rule. Possible values: ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#effect GoogleIamPrincipalAccessBoundaryPolicy#effect}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

A list of Cloud Resource Manager resources.

The resource
and all the descendants are included. The number of resources in a policy
is limited to 500 across all rules.
The following resource types are supported:

* Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
* Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
* Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
  or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#resources GoogleIamPrincipalAccessBoundaryPolicy#resources}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#description GoogleIamPrincipalAccessBoundaryPolicy#description}

---

### GoogleIamPrincipalAccessBoundaryPolicyTimeouts <a name="GoogleIamPrincipalAccessBoundaryPolicyTimeouts" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamPrincipalAccessBoundaryPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion">ResetEnforcementVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules"></a>

```csharp
private void PutRules(IResolvable|GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

---

##### `ResetEnforcementVersion` <a name="ResetEnforcementVersion" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion"></a>

```csharp
private void ResetEnforcementVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList">GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput">EnforcementVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion">EnforcementVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules"></a>

```csharp
public GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList">GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList</a>

---

##### `EnforcementVersionInput`<sup>Optional</sup> <a name="EnforcementVersionInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput"></a>

```csharp
public string EnforcementVersionInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput"></a>

```csharp
public IResolvable|GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

---

##### `EnforcementVersion`<sup>Required</sup> <a name="EnforcementVersion" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion"></a>

```csharp
public string EnforcementVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public GoogleIamPrincipalAccessBoundaryPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---


### GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get"></a>

```csharp
private GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

---


### GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamPrincipalAccessBoundaryPolicyDetailsRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>

---


### GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamPrincipalAccessBoundaryPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

---



