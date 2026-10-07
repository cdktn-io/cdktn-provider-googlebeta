# `googleChronicleCaseTagDefinition` Submodule <a name="`googleChronicleCaseTagDefinition` Submodule" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleCaseTagDefinition <a name="GoogleChronicleCaseTagDefinition" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition google_chronicle_case_tag_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleCaseTagDefinition(Construct Scope, string Id, GoogleChronicleCaseTagDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig">GoogleChronicleCaseTagDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig">GoogleChronicleCaseTagDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetPropertyName">ResetPropertyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleChronicleCaseTagDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPropertyName` <a name="ResetPropertyName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetPropertyName"></a>

```csharp
private void ResetPropertyName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleCaseTagDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleCaseTagDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleCaseTagDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleCaseTagDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleCaseTagDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleChronicleCaseTagDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleCaseTagDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleCaseTagDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleCaseTagDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.caseTagDefinitionId">CaseTagDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference">GoogleChronicleCaseTagDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.canBeCaseTitleInput">CanBeCaseTitleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.comparisonTypeInput">ComparisonTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.matchCriteriaInput">MatchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.propertyNameInput">PropertyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.canBeCaseTitle">CanBeCaseTitle</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.comparisonType">ComparisonType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.matchCriteria">MatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.propertyName">PropertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaseTagDefinitionId`<sup>Required</sup> <a name="CaseTagDefinitionId" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.caseTagDefinitionId"></a>

```csharp
public string CaseTagDefinitionId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.timeouts"></a>

```csharp
public GoogleChronicleCaseTagDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference">GoogleChronicleCaseTagDefinitionTimeoutsOutputReference</a>

---

##### `CanBeCaseTitleInput`<sup>Optional</sup> <a name="CanBeCaseTitleInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.canBeCaseTitleInput"></a>

```csharp
public bool|IResolvable CanBeCaseTitleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ComparisonTypeInput`<sup>Optional</sup> <a name="ComparisonTypeInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.comparisonTypeInput"></a>

```csharp
public string ComparisonTypeInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MatchCriteriaInput`<sup>Optional</sup> <a name="MatchCriteriaInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.matchCriteriaInput"></a>

```csharp
public string MatchCriteriaInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertyNameInput`<sup>Optional</sup> <a name="PropertyNameInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.propertyNameInput"></a>

```csharp
public string PropertyNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleChronicleCaseTagDefinitionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `CanBeCaseTitle`<sup>Required</sup> <a name="CanBeCaseTitle" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.canBeCaseTitle"></a>

```csharp
public bool|IResolvable CanBeCaseTitle { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ComparisonType`<sup>Required</sup> <a name="ComparisonType" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.comparisonType"></a>

```csharp
public string ComparisonType { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.matchCriteria"></a>

```csharp
public string MatchCriteria { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.propertyName"></a>

```csharp
public string PropertyName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleCaseTagDefinitionConfig <a name="GoogleChronicleCaseTagDefinitionConfig" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleCaseTagDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable CanBeCaseTitle,
    string ComparisonType,
    string DisplayName,
    string Instance,
    string Location,
    string MatchCriteria,
    double Priority,
    string Value,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    string PropertyName = null,
    GoogleChronicleCaseTagDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.canBeCaseTitle">CanBeCaseTitle</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When checked, the tag will be assigned as the title of the case if it meets the conditions. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.comparisonType">ComparisonType</a></code> | <code>string</code> | The type of comparison to be used when comparing the value to the case. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | This is the name of the tag that will be applied to the case. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.instance">Instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.matchCriteria">MatchCriteria</a></code> | <code>string</code> | The criteria to match the case against. Possible values: ["BY_VENDOR", "BY_PRODUCT", "BY_RULE_GENERATOR", "BY_ENTITY_PROPERTY_NAME", "DATA_DRIVEN", "SYSTEM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.priority">Priority</a></code> | <code>double</code> | Note that Google Security Operations merges priority with other alerts and entities and events so that the priority here is not absolute. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.value">Value</a></code> | <code>string</code> | Specific value to search in case - in addition to SearchIn property. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#id GoogleChronicleCaseTagDefinition#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#project GoogleChronicleCaseTagDefinition#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.propertyName">PropertyName</a></code> | <code>string</code> | Specific Entity property name to search in case. This is relevant only when a SearchIn of type BY_ENTITY_PROPERTY_NAME was chosen. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CanBeCaseTitle`<sup>Required</sup> <a name="CanBeCaseTitle" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.canBeCaseTitle"></a>

```csharp
public bool|IResolvable CanBeCaseTitle { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When checked, the tag will be assigned as the title of the case if it meets the conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#can_be_case_title GoogleChronicleCaseTagDefinition#can_be_case_title}

---

##### `ComparisonType`<sup>Required</sup> <a name="ComparisonType" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.comparisonType"></a>

```csharp
public string ComparisonType { get; set; }
```

- *Type:* string

The type of comparison to be used when comparing the value to the case.

Possible values: ["EXACT", "START_WITH", "CONTAIN", "ENDS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#comparison_type GoogleChronicleCaseTagDefinition#comparison_type}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

This is the name of the tag that will be applied to the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#display_name GoogleChronicleCaseTagDefinition#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#instance GoogleChronicleCaseTagDefinition#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#location GoogleChronicleCaseTagDefinition#location}

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.matchCriteria"></a>

```csharp
public string MatchCriteria { get; set; }
```

- *Type:* string

The criteria to match the case against. Possible values: ["BY_VENDOR", "BY_PRODUCT", "BY_RULE_GENERATOR", "BY_ENTITY_PROPERTY_NAME", "DATA_DRIVEN", "SYSTEM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#match_criteria GoogleChronicleCaseTagDefinition#match_criteria}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Note that Google Security Operations merges priority with other alerts and entities and events so that the priority here is not absolute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#priority GoogleChronicleCaseTagDefinition#priority}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Specific value to search in case - in addition to SearchIn property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#value GoogleChronicleCaseTagDefinition#value}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#deletion_policy GoogleChronicleCaseTagDefinition#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#id GoogleChronicleCaseTagDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#project GoogleChronicleCaseTagDefinition#project}.

---

##### `PropertyName`<sup>Optional</sup> <a name="PropertyName" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.propertyName"></a>

```csharp
public string PropertyName { get; set; }
```

- *Type:* string

Specific Entity property name to search in case. This is relevant only when a SearchIn of type BY_ENTITY_PROPERTY_NAME was chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#property_name GoogleChronicleCaseTagDefinition#property_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionConfig.property.timeouts"></a>

```csharp
public GoogleChronicleCaseTagDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#timeouts GoogleChronicleCaseTagDefinition#timeouts}

---

### GoogleChronicleCaseTagDefinitionTimeouts <a name="GoogleChronicleCaseTagDefinitionTimeouts" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleCaseTagDefinitionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#create GoogleChronicleCaseTagDefinition#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#delete GoogleChronicleCaseTagDefinition#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#update GoogleChronicleCaseTagDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#create GoogleChronicleCaseTagDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#delete GoogleChronicleCaseTagDefinition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_chronicle_case_tag_definition#update GoogleChronicleCaseTagDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleCaseTagDefinitionTimeoutsOutputReference <a name="GoogleChronicleCaseTagDefinitionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleCaseTagDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleCaseTagDefinitionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleCaseTagDefinition.GoogleChronicleCaseTagDefinitionTimeouts">GoogleChronicleCaseTagDefinitionTimeouts</a>

---



