# `googleFirebaseAppCheckResourcePolicy` Submodule <a name="`googleFirebaseAppCheckResourcePolicy` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckResourcePolicy <a name="GoogleFirebaseAppCheckResourcePolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy google_firebase_app_check_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAppCheckResourcePolicy(Construct Scope, string Id, GoogleFirebaseAppCheckResourcePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig">GoogleFirebaseAppCheckResourcePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig">GoogleFirebaseAppCheckResourcePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetEnforcementMode">ResetEnforcementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFirebaseAppCheckResourcePolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEnforcementMode` <a name="ResetEnforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetEnforcementMode"></a>

```csharp
private void ResetEnforcementMode()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAppCheckResourcePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAppCheckResourcePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAppCheckResourcePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAppCheckResourcePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleFirebaseAppCheckResourcePolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAppCheckResourcePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAppCheckResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.resourcePolicyId">ResourcePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference">GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResourceInput">TargetResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResource">TargetResource</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ResourcePolicyId`<sup>Required</sup> <a name="ResourcePolicyId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.resourcePolicyId"></a>

```csharp
public string ResourcePolicyId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeouts"></a>

```csharp
public GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference">GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementModeInput"></a>

```csharp
public string EnforcementModeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `TargetResourceInput`<sup>Optional</sup> <a name="TargetResourceInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResourceInput"></a>

```csharp
public string TargetResourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleFirebaseAppCheckResourcePolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.targetResource"></a>

```csharp
public string TargetResource { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckResourcePolicyConfig <a name="GoogleFirebaseAppCheckResourcePolicyConfig" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAppCheckResourcePolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ServiceId,
    string TargetResource,
    string DeletionPolicy = null,
    string EnforcementMode = null,
    string Id = null,
    string Project = null,
    GoogleFirebaseAppCheckResourcePolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | The identifier of the service to configure a Resource Policy for. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.targetResource">TargetResource</a></code> | <code>string</code> | Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | The App Check enforcement mode for a service supported by App Check. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

The identifier of the service to configure a Resource Policy for.

Currently, the following service IDs are supported:

* 'oauth2.googleapis.com' (Google Identity for iOS)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#service_id GoogleFirebaseAppCheckResourcePolicy#service_id}

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.targetResource"></a>

```csharp
public string TargetResource { get; set; }
```

- *Type:* string

Service specific name of the resource object to which this policy applies, in the format: * iOS OAuth clients (Google Identity for iOS):   '//oauth2.googleapis.com/projects/{project_number}/oauthClients/{oauthClientId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#target_resource GoogleFirebaseAppCheckResourcePolicy#target_resource}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#deletion_policy GoogleFirebaseAppCheckResourcePolicy#deletion_policy}

---

##### `EnforcementMode`<sup>Optional</sup> <a name="EnforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; set; }
```

- *Type:* string

The App Check enforcement mode for a service supported by App Check.

This will override the EnforcementMode setting on the service.
Valid values are:

(Unset)
Firebase App Check is not enforced for the service, nor are App Check metrics collected.
Though the service is not protected by App Check in this mode, other applicable protections,
such as user authorization, are still enforced. An unconfigured service is in this mode by default.
This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service.

UNENFORCED
Firebase App Check is not enforced for the service. App Check metrics are collected to help you
decide when to turn on enforcement for the service. Though the service is not protected by App Check
in this mode, other applicable protections, such as user authorization, are still enforced.

ENFORCED
Firebase App Check is enforced for the service. The service will reject any request that attempts to
access your project's resources if it does not have valid App Check token attached, with some exceptions
depending on the service; for example, some services will still allow requests bearing the developer's
privileged service account credentials without an App Check token. App Check metrics continue to be
collected to help you detect issues with your App Check integration and monitor the composition of your
callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time.

Use caution when choosing to enforce App Check on a Firebase service. If your users have not updated
to an App Check capable version of your app, their apps will no longer be able to use your Firebase
services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services.

If your app has not launched yet, you should enable enforcement immediately, since there are no outdated
clients in use. Possible values: ["UNENFORCED", "ENFORCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#enforcement_mode GoogleFirebaseAppCheckResourcePolicy#enforcement_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#id GoogleFirebaseAppCheckResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#project GoogleFirebaseAppCheckResourcePolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyConfig.property.timeouts"></a>

```csharp
public GoogleFirebaseAppCheckResourcePolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#timeouts GoogleFirebaseAppCheckResourcePolicy#timeouts}

---

### GoogleFirebaseAppCheckResourcePolicyTimeouts <a name="GoogleFirebaseAppCheckResourcePolicyTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAppCheckResourcePolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#create GoogleFirebaseAppCheckResourcePolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#delete GoogleFirebaseAppCheckResourcePolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#update GoogleFirebaseAppCheckResourcePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#create GoogleFirebaseAppCheckResourcePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#delete GoogleFirebaseAppCheckResourcePolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_firebase_app_check_resource_policy#update GoogleFirebaseAppCheckResourcePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference <a name="GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleFirebaseAppCheckResourcePolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckResourcePolicy.GoogleFirebaseAppCheckResourcePolicyTimeouts">GoogleFirebaseAppCheckResourcePolicyTimeouts</a>

---



