# `googleIamOrganizationAccessPolicy` Submodule <a name="`googleIamOrganizationAccessPolicy` Submodule" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamOrganizationAccessPolicy <a name="GoogleIamOrganizationAccessPolicy" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy google_iam_organization_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicy(Construct Scope, string Id, GoogleIamOrganizationAccessPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig">GoogleIamOrganizationAccessPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig">GoogleIamOrganizationAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putDetails"></a>

```csharp
private void PutDetails(GoogleIamOrganizationAccessPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIamOrganizationAccessPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDetails"></a>

```csharp
private void ResetDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamOrganizationAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamOrganizationAccessPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamOrganizationAccessPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamOrganizationAccessPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamOrganizationAccessPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleIamOrganizationAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamOrganizationAccessPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamOrganizationAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamOrganizationAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference">GoogleIamOrganizationAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference">GoogleIamOrganizationAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.accessPolicyIdInput">AccessPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.accessPolicyId">AccessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.organization">Organization</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.details"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetailsOutputReference Details { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference">GoogleIamOrganizationAccessPolicyDetailsOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.timeouts"></a>

```csharp
public GoogleIamOrganizationAccessPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference">GoogleIamOrganizationAccessPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccessPolicyIdInput`<sup>Optional</sup> <a name="AccessPolicyIdInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.accessPolicyIdInput"></a>

```csharp
public string AccessPolicyIdInput { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.detailsInput"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetails DetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a>

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.accessPolicyId"></a>

```csharp
public string AccessPolicyId { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamOrganizationAccessPolicyConfig <a name="GoogleIamOrganizationAccessPolicyConfig" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessPolicyId,
    string Location,
    string Organization,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DeletionPolicy = null,
    GoogleIamOrganizationAccessPolicyDetails Details = null,
    string DisplayName = null,
    string Id = null,
    GoogleIamOrganizationAccessPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.accessPolicyId">AccessPolicyId</a></code> | <code>string</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.organization">Organization</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#id GoogleIamOrganizationAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.accessPolicyId"></a>

```csharp
public string AccessPolicyId { get; set; }
```

- *Type:* string

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#access_policy_id GoogleIamOrganizationAccessPolicy#access_policy_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#location GoogleIamOrganizationAccessPolicy#location}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#organization GoogleIamOrganizationAccessPolicy#organization}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#annotations GoogleIamOrganizationAccessPolicy#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#deletion_policy GoogleIamOrganizationAccessPolicy#deletion_policy}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.details"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetails Details { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#details GoogleIamOrganizationAccessPolicy#details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#display_name GoogleIamOrganizationAccessPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#id GoogleIamOrganizationAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyConfig.property.timeouts"></a>

```csharp
public GoogleIamOrganizationAccessPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#timeouts GoogleIamOrganizationAccessPolicy#timeouts}

---

### GoogleIamOrganizationAccessPolicyDetails <a name="GoogleIamOrganizationAccessPolicyDetails" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetails {
    IResolvable|GoogleIamOrganizationAccessPolicyDetailsRules[] Rules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>[]</code> | rules block. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails.property.rules"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyDetailsRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#rules GoogleIamOrganizationAccessPolicy#rules}

---

### GoogleIamOrganizationAccessPolicyDetailsRules <a name="GoogleIamOrganizationAccessPolicyDetailsRules" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetailsRules {
    string Effect,
    GoogleIamOrganizationAccessPolicyDetailsRulesOperation Operation,
    string[] Principals,
    IResolvable|GoogleIamOrganizationAccessPolicyDetailsRulesConditions[] Conditions = null,
    string Description = null,
    string[] ExcludedPrincipals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.effect">Effect</a></code> | <code>string</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.principals">Principals</a></code> | <code>string[]</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.description">Description</a></code> | <code>string</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>string[]</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#effect GoogleIamOrganizationAccessPolicy#effect}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.operation"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetailsRulesOperation Operation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#operation GoogleIamOrganizationAccessPolicy#operation}

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:

* 'principal://goog/subject/{email_id}': A specific Google Account.
  Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  A Google Cloud service account. For example,
  'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
  'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  principals associated with the specified Google Workspace or Cloud
  Identity customer ID. For example,
  'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  If an identifier that was previously set on a policy is soft deleted, then
  calls to read that policy will return the identifier with a deleted
  prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  Google Account that was deleted recently. For example,
  'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  the Google Account is recovered, this identifier reverts to the standard
  identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  that was deleted recently. For example,
  'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  If the Google group is restored, this identifier reverts to the standard
  identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  A Google Cloud service account that was deleted recently. For example,
  'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  If the service account is undeleted, this identifier reverts to the
  standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#principals GoogleIamOrganizationAccessPolicy#principals}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.conditions"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyDetailsRulesConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#conditions GoogleIamOrganizationAccessPolicy#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#description GoogleIamOrganizationAccessPolicy#description}

---

##### `ExcludedPrincipals`<sup>Optional</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```csharp
public string[] ExcludedPrincipals { get; set; }
```

- *Type:* string[]

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#excluded_principals GoogleIamOrganizationAccessPolicy#excluded_principals}

---

### GoogleIamOrganizationAccessPolicyDetailsRulesConditions <a name="GoogleIamOrganizationAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetailsRulesConditions {
    string Service,
    string Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#service GoogleIamOrganizationAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#service GoogleIamOrganizationAccessPolicy#service}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#expression GoogleIamOrganizationAccessPolicy#expression}

---

### GoogleIamOrganizationAccessPolicyDetailsRulesOperation <a name="GoogleIamOrganizationAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetailsRulesOperation {
    string[] Permissions,
    string[] ExcludedPermissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.property.permissions">Permissions</a></code> | <code>string[]</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.property.excludedPermissions">ExcludedPermissions</a></code> | <code>string[]</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.property.permissions"></a>

```csharp
public string[] Permissions { get; set; }
```

- *Type:* string[]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#permissions GoogleIamOrganizationAccessPolicy#permissions}

---

##### `ExcludedPermissions`<sup>Optional</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```csharp
public string[] ExcludedPermissions { get; set; }
```

- *Type:* string[]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#excluded_permissions GoogleIamOrganizationAccessPolicy#excluded_permissions}

---

### GoogleIamOrganizationAccessPolicyTimeouts <a name="GoogleIamOrganizationAccessPolicyTimeouts" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#create GoogleIamOrganizationAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#delete GoogleIamOrganizationAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#update GoogleIamOrganizationAccessPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#create GoogleIamOrganizationAccessPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#delete GoogleIamOrganizationAccessPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_iam_organization_access_policy#update GoogleIamOrganizationAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamOrganizationAccessPolicyDetailsOutputReference <a name="GoogleIamOrganizationAccessPolicyDetailsOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.putRules"></a>

```csharp
private void PutRules(IResolvable|GoogleIamOrganizationAccessPolicyDetailsRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList">GoogleIamOrganizationAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.rules"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetailsRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList">GoogleIamOrganizationAccessPolicyDetailsRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyDetailsRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetails">GoogleIamOrganizationAccessPolicyDetails</a>

---


### GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList <a name="GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.get"></a>

```csharp
private GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyDetailsRulesConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>[]

---


### GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference <a name="GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyDetailsRulesConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>

---


### GoogleIamOrganizationAccessPolicyDetailsRulesList <a name="GoogleIamOrganizationAccessPolicyDetailsRulesList" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetailsRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.get"></a>

```csharp
private GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyDetailsRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>[]

---


### GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference <a name="GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">ResetExcludedPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedPermissions` <a name="ResetExcludedPermissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```csharp
private void ResetExcludedPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">ExcludedPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">ExcludedPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedPermissionsInput`<sup>Optional</sup> <a name="ExcludedPermissionsInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```csharp
public string[] ExcludedPermissionsInput { get; }
```

- *Type:* string[]

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `ExcludedPermissions`<sup>Required</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```csharp
public string[] ExcludedPermissions { get; }
```

- *Type:* string[]

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetailsRulesOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a>

---


### GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference <a name="GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation">PutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">ResetExcludedPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|GoogleIamOrganizationAccessPolicyDetailsRulesConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>[]

---

##### `PutOperation` <a name="PutOperation" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```csharp
private void PutOperation(GoogleIamOrganizationAccessPolicyDetailsRulesOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludedPrincipals` <a name="ResetExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```csharp
private void ResetExcludedPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList">GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference">GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">ExcludedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.operationInput">OperationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList">GoogleIamOrganizationAccessPolicyDetailsRulesConditionsList</a>

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference Operation { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference">GoogleIamOrganizationAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyDetailsRulesConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesConditions">GoogleIamOrganizationAccessPolicyDetailsRulesConditions</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `ExcludedPrincipalsInput`<sup>Optional</sup> <a name="ExcludedPrincipalsInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```csharp
public string[] ExcludedPrincipalsInput { get; }
```

- *Type:* string[]

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```csharp
public GoogleIamOrganizationAccessPolicyDetailsRulesOperation OperationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOperation">GoogleIamOrganizationAccessPolicyDetailsRulesOperation</a>

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `ExcludedPrincipals`<sup>Required</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```csharp
public string[] ExcludedPrincipals { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyDetailsRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyDetailsRules">GoogleIamOrganizationAccessPolicyDetailsRules</a>

---


### GoogleIamOrganizationAccessPolicyTimeoutsOutputReference <a name="GoogleIamOrganizationAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamOrganizationAccessPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamOrganizationAccessPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamOrganizationAccessPolicy.GoogleIamOrganizationAccessPolicyTimeouts">GoogleIamOrganizationAccessPolicyTimeouts</a>

---



