# `googleIamProjectAccessPolicy` Submodule <a name="`googleIamProjectAccessPolicy` Submodule" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamProjectAccessPolicy <a name="GoogleIamProjectAccessPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy google_iam_project_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicy(Construct Scope, string Id, GoogleIamProjectAccessPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig">GoogleIamProjectAccessPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig">GoogleIamProjectAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putDetails"></a>

```csharp
private void PutDetails(GoogleIamProjectAccessPolicyDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleIamProjectAccessPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDetails"></a>

```csharp
private void ResetDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamProjectAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamProjectAccessPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamProjectAccessPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamProjectAccessPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleIamProjectAccessPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleIamProjectAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamProjectAccessPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamProjectAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamProjectAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference">GoogleIamProjectAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference">GoogleIamProjectAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyIdInput">AccessPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyId">AccessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.details"></a>

```csharp
public GoogleIamProjectAccessPolicyDetailsOutputReference Details { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference">GoogleIamProjectAccessPolicyDetailsOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeouts"></a>

```csharp
public GoogleIamProjectAccessPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference">GoogleIamProjectAccessPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccessPolicyIdInput`<sup>Optional</sup> <a name="AccessPolicyIdInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyIdInput"></a>

```csharp
public string AccessPolicyIdInput { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.detailsInput"></a>

```csharp
public GoogleIamProjectAccessPolicyDetails DetailsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.accessPolicyId"></a>

```csharp
public string AccessPolicyId { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamProjectAccessPolicyConfig <a name="GoogleIamProjectAccessPolicyConfig" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessPolicyId,
    string Location,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DeletionPolicy = null,
    GoogleIamProjectAccessPolicyDetails Details = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleIamProjectAccessPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.accessPolicyId">AccessPolicyId</a></code> | <code>string</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#id GoogleIamProjectAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#project GoogleIamProjectAccessPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.accessPolicyId"></a>

```csharp
public string AccessPolicyId { get; set; }
```

- *Type:* string

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#access_policy_id GoogleIamProjectAccessPolicy#access_policy_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#location GoogleIamProjectAccessPolicy#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#annotations GoogleIamProjectAccessPolicy#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#deletion_policy GoogleIamProjectAccessPolicy#deletion_policy}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.details"></a>

```csharp
public GoogleIamProjectAccessPolicyDetails Details { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#details GoogleIamProjectAccessPolicy#details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#display_name GoogleIamProjectAccessPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#id GoogleIamProjectAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#project GoogleIamProjectAccessPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyConfig.property.timeouts"></a>

```csharp
public GoogleIamProjectAccessPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#timeouts GoogleIamProjectAccessPolicy#timeouts}

---

### GoogleIamProjectAccessPolicyDetails <a name="GoogleIamProjectAccessPolicyDetails" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetails {
    IResolvable|GoogleIamProjectAccessPolicyDetailsRules[] Rules
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]</code> | rules block. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails.property.rules"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyDetailsRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#rules GoogleIamProjectAccessPolicy#rules}

---

### GoogleIamProjectAccessPolicyDetailsRules <a name="GoogleIamProjectAccessPolicyDetailsRules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetailsRules {
    string Effect,
    GoogleIamProjectAccessPolicyDetailsRulesOperation Operation,
    string[] Principals,
    IResolvable|GoogleIamProjectAccessPolicyDetailsRulesConditions[] Conditions = null,
    string Description = null,
    string[] ExcludedPrincipals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.effect">Effect</a></code> | <code>string</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.principals">Principals</a></code> | <code>string[]</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.description">Description</a></code> | <code>string</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>string[]</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#effect GoogleIamProjectAccessPolicy#effect}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.operation"></a>

```csharp
public GoogleIamProjectAccessPolicyDetailsRulesOperation Operation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#operation GoogleIamProjectAccessPolicy#operation}

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.principals"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#principals GoogleIamProjectAccessPolicy#principals}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.conditions"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyDetailsRulesConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#conditions GoogleIamProjectAccessPolicy#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#description GoogleIamProjectAccessPolicy#description}

---

##### `ExcludedPrincipals`<sup>Optional</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```csharp
public string[] ExcludedPrincipals { get; set; }
```

- *Type:* string[]

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#excluded_principals GoogleIamProjectAccessPolicy#excluded_principals}

---

### GoogleIamProjectAccessPolicyDetailsRulesConditions <a name="GoogleIamProjectAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetailsRulesConditions {
    string Service,
    string Expression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#service GoogleIamProjectAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#service GoogleIamProjectAccessPolicy#service}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#expression GoogleIamProjectAccessPolicy#expression}

---

### GoogleIamProjectAccessPolicyDetailsRulesOperation <a name="GoogleIamProjectAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetailsRulesOperation {
    string[] Permissions,
    string[] ExcludedPermissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.permissions">Permissions</a></code> | <code>string[]</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions">ExcludedPermissions</a></code> | <code>string[]</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.permissions"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#permissions GoogleIamProjectAccessPolicy#permissions}

---

##### `ExcludedPermissions`<sup>Optional</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#excluded_permissions GoogleIamProjectAccessPolicy#excluded_permissions}

---

### GoogleIamProjectAccessPolicyTimeouts <a name="GoogleIamProjectAccessPolicyTimeouts" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#create GoogleIamProjectAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#delete GoogleIamProjectAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#update GoogleIamProjectAccessPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#create GoogleIamProjectAccessPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#delete GoogleIamProjectAccessPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_iam_project_access_policy#update GoogleIamProjectAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamProjectAccessPolicyDetailsOutputReference <a name="GoogleIamProjectAccessPolicyDetailsOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.putRules"></a>

```csharp
private void PutRules(IResolvable|GoogleIamProjectAccessPolicyDetailsRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList">GoogleIamProjectAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rules"></a>

```csharp
public GoogleIamProjectAccessPolicyDetailsRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList">GoogleIamProjectAccessPolicyDetailsRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyDetailsRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public GoogleIamProjectAccessPolicyDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetails">GoogleIamProjectAccessPolicyDetails</a>

---


### GoogleIamProjectAccessPolicyDetailsRulesConditionsList <a name="GoogleIamProjectAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetailsRulesConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.get"></a>

```csharp
private GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyDetailsRulesConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]

---


### GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference <a name="GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyDetailsRulesConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>

---


### GoogleIamProjectAccessPolicyDetailsRulesList <a name="GoogleIamProjectAccessPolicyDetailsRulesList" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetailsRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.get"></a>

```csharp
private GoogleIamProjectAccessPolicyDetailsRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyDetailsRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>[]

---


### GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference <a name="GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">ResetExcludedPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedPermissions` <a name="ResetExcludedPermissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```csharp
private void ResetExcludedPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">ExcludedPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">ExcludedPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions">Permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedPermissionsInput`<sup>Optional</sup> <a name="ExcludedPermissionsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```csharp
public string[] ExcludedPermissionsInput { get; }
```

- *Type:* string[]

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```csharp
public string[] PermissionsInput { get; }
```

- *Type:* string[]

---

##### `ExcludedPermissions`<sup>Required</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```csharp
public string[] ExcludedPermissions { get; }
```

- *Type:* string[]

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```csharp
public string[] Permissions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```csharp
public GoogleIamProjectAccessPolicyDetailsRulesOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

---


### GoogleIamProjectAccessPolicyDetailsRulesOutputReference <a name="GoogleIamProjectAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyDetailsRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putOperation">PutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">ResetExcludedPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|GoogleIamProjectAccessPolicyDetailsRulesConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]

---

##### `PutOperation` <a name="PutOperation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```csharp
private void PutOperation(GoogleIamProjectAccessPolicyDetailsRulesOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludedPrincipals` <a name="ResetExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```csharp
private void ResetExcludedPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList">GoogleIamProjectAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference">GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">ExcludedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput">OperationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```csharp
public GoogleIamProjectAccessPolicyDetailsRulesConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditionsList">GoogleIamProjectAccessPolicyDetailsRulesConditionsList</a>

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```csharp
public GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference Operation { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference">GoogleIamProjectAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyDetailsRulesConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesConditions">GoogleIamProjectAccessPolicyDetailsRulesConditions</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `ExcludedPrincipalsInput`<sup>Optional</sup> <a name="ExcludedPrincipalsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```csharp
public string[] ExcludedPrincipalsInput { get; }
```

- *Type:* string[]

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```csharp
public GoogleIamProjectAccessPolicyDetailsRulesOperation OperationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOperation">GoogleIamProjectAccessPolicyDetailsRulesOperation</a>

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `ExcludedPrincipals`<sup>Required</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```csharp
public string[] ExcludedPrincipals { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyDetailsRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyDetailsRules">GoogleIamProjectAccessPolicyDetailsRules</a>

---


### GoogleIamProjectAccessPolicyTimeoutsOutputReference <a name="GoogleIamProjectAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleIamProjectAccessPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleIamProjectAccessPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleIamProjectAccessPolicy.GoogleIamProjectAccessPolicyTimeouts">GoogleIamProjectAccessPolicyTimeouts</a>

---



